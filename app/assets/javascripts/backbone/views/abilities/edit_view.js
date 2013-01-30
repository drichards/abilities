Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.EditView = Backbone.View.extend({
  template: JST["backbone/templates/abilities/edit"],
  el: "#shown-ability .flipper .edit-view",

  events: {
    "submit #edit-ability" : "update"
  },

  update: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.model.save(null, {
      success : function(ability) {
        this.model = ability;
      }
    });
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ));
    $(this.el).addClass(this.model.get("ability_type"));

    this.$("form").backboneLink(this.model);

    $("#shown-ability .flipper").addClass("flipped");

    return this;
  }
});
