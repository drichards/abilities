Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.ShowView = Backbone.View.extend({
  template: JST["backbone/templates/abilities/show"],
  el: "#shown-ability .flipper .show-view",

  events: {
    "click .edit": "edit"
  },

  edit: function() {
    var view = new Abilities.Views.Abilities.EditView({model : this.model});
    view.render();
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ))
    $(this.el).addClass(this.model.get("ability_type"));

    left = $("#abilities").outerWidth() / 2 - $(this.el).outerWidth() / 2;
    console.debug($("#abilities").outerWidth());
    console.debug($(this.el).outerWidth());
    console.debug(left);

    $("#shown-ability").css("left", left);
    $("#shown-ability").show();

    return this;
  }
});
