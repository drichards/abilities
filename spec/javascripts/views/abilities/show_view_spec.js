describe("Ability Show View", function() {
    beforeEach(function() {
        spyOn(Abilities.Views.Abilities.ShowView.prototype, "render").andCallThrough();
        spyOn(Abilities.Views.Abilities.ShowView.prototype, "edit").andCallThrough();
        this.model = new Backbone.Model({
            id: 1,
            description: "foobar",
            body: "foobar"
        });

        this.view = new Abilities.Views.Abilities.ShowView({
            model : this.model
        });
    });

    it("should render the view when the model changes", function() {
        this.model.trigger("change");

        expect(this.view.render).toHaveBeenCalled();
    });

    it("should trigger an edit event when edit is called", function() {
        spyOn(this.view, "trigger");
        this.view.edit();
        expect(this.view.trigger).wasCalledWith("edit", this.model.id);
    });
});
