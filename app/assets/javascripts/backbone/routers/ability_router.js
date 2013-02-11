Abilities.Routers.AbilityRouter = Backbone.Router.extend({
    routes: {
        "abilities/:id": "ability",
        "abilities/:id/edit": "editAbility"
    },

    ability: function(id) {
        this.ability = new Abilities.Models.Ability({id:id});
        this.abilityShowView = new Abilities.Views.Abilities.ShowView({
            model: this.ability
        });

        this.abilityShowView.on("edit", function() {
            this.navigate("abilities/" + this.ability.id + "/edit", true);
        }, this);

        this.ability.fetch();
    },

    editAbility: function(id) {
        this.ability = new Abilities.Models.Ability({id:id});
        this.abilityShowView = new Abilities.Views.Abilities.EditView({
            model: this.ability
        });
        this.ability.fetch();
    }
});
