describe("AbilityRouter", function() {
    beforeEach(function() {
        this.router = new Abilities.Routers.AbilityRouter();
        try {
            Backbone.history.start({silent:true, pushState:true});
        } catch(e) {}

        this.router.navigate("foobar");

        this.server = sinon.fakeServer.create();
        this.responseBody = '{"id":1,"name":"testing"}';
        this.server.respondWith(
            "GET",
            "/abilities/1",
            [
                200,
                {"Content-Type": "application/json"},
                this.responseBody
            ]
        );
    });

    afterEach(function() {
        this.server.restore();
    });

    describe("/abilities/:id", function() {
        beforeEach(function() {

            this.testModel = new Abilities.Models.Ability({id:1});
            this.testView = new Backbone.View();

            spyOn(Abilities.Models, "Ability").andReturn(this.testModel);
            spyOn(Abilities.Views.Abilities, "ShowView").andReturn(this.testView);
            spyOn(this.testView, "render").andReturn(this.testView);

            this.router.navigate("abilities/1", true);
        });

        it("should have a /abilities/:id route", function() {
            this.spy = jasmine.createSpy();

            this.router.bind("route:ability", this.spy);
            this.router.navigate("abilities/10", true);

            expect(this.spy.callCount).toBe(1);
            expect(this.spy).toHaveBeenCalledWith("10");
        });

        it("should create a new Ability model", function() {
            expect(Abilities.Models.Ability).toHaveBeenCalledWith({id: "1"});
        });

        it("should create a new Ability.ShowView", function() {
            expect(Abilities.Views.Abilities.ShowView).toHaveBeenCalled();
        });

        it("should create a new Ability.ShowView with the correct model", function() {
            expect(Abilities.Views.Abilities.ShowView).toHaveBeenCalledWith({model: this.testModel});
        });

        it("should route to the edit action when edit is trigged on the view", function() {
            this.spy = jasmine.createSpy();

            this.router.bind("route:editAbility", this.spy);

            this.router.abilityShowView.trigger("edit");

            expect(this.spy.callCount).toBe(1);
            expect(this.spy).toHaveBeenCalledWith("1");
        });
    });

    describe("/abilities/:id/edit", function() {
        beforeEach(function() {
            this.testModel = new Abilities.Models.Ability({id:1});
            this.testView = new Backbone.View();

            spyOn(Abilities.Views.Abilities, "EditView").andReturn(this.testView);

            this.router.navigate("abilities/1/edit", true);
        });

        it("should have a /abilities/:id/edit route", function() {
            this.spy = jasmine.createSpy();

            this.router.bind("route:editAbility", this.spy);
            this.router.navigate("abilities/10/edit", true);

            expect(this.spy.callCount).toBe(1);
            expect(this.spy).toHaveBeenCalledWith("10");
        });

        it("should create a new Ability.EditView with the correct model", function() {
            expect(Abilities.Views.Abilities.EditView.mostRecentCall.args[0].model.id).toEqual("1");
        });
    });
});
