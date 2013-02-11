describe("Ability Index View", function() {
    beforeEach(function() {
        spyOn(Abilities.Views.Abilities.IndexView.prototype, "render").andCallThrough();

        this.view = new Abilities.Views.Abilities.IndexView({
            abilities: [{
                id: 1,
                description: "foobar",
                body: "foobar"
            }]
        });
    });

    it("should render the view on intialization", function() {
        expect(this.view.render).toHaveBeenCalled();
    });

    it("should trigger a show event when show is triggered on a model", function() {
        spyOn(this.view, "trigger");
        this.view.collection.at(1).trigger("show");
        expect(this.view.trigger).wasCalledWith("show", 1);
    });
});
