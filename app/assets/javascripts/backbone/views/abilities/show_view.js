Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.ShowView = Backbone.View.extend({
  template: JST["backbone/templates/abilities/show"],
  el: "#shown-ability .flipper .show-view",

  events: {
    "click .edit": "edit"
  },

  initialize: function(options) {
    this.model.bind("change", this.render, this);
  },

  edit: function() {
    this.trigger("edit", this.model.id);    
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ))
    $(this.el).addClass(this.model.get("ability_type"));

    left = $("#abilities").outerWidth() / 2 - $(this.el).outerWidth() / 2;

    $("#shown-ability").css("left", left);
    $("#shown-ability").show();

    return this;
  }
});
