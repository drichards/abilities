Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.NewView = Backbone.View.extend({
  template: JST["backbone/templates/abilities/new"],

  events: {
    "submit #new-ability": "save"
  },

  initialize: function(options) {
     this.collection = this.options.collection;
     this.model = new Abilities.Models.Ability();
  },

  save: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.model.unset("errors");

    this.collection.create(this.model.toJSON(), {
      error: function(ability, jqXHR) {
        this.model.set({errors: $.parseJSON(jqXHR.responseText)});
      }
    });
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ));

    this.$("form").backboneLink(this.model);

    return this;
  }
});
