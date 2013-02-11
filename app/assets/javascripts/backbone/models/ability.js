Abilities.Models.Ability = Backbone.Model.extend({
  urlRoot: '/abilities',

  defaults: {
    name: null,
    ability_type: 'at-will',
    description: null,
    body: null,
    column: 1,
    order: 1
  }
});

Abilities.Collections.AbilitiesCollection = Backbone.Collection.extend({
  model: Abilities.Models.Ability,
  url: '/abilities',

  saveAll: function(options) {
    _.each(this.models, this.saveOne, this);
  },

  comparator: function(item) {
    return item.get("order");    
  },

  saveOne: function(model) {
    model.save();
  }
});
