Abilities.Models.Ability = Backbone.Model.extend({
  paramRoot: 'ability',

  defaults: {
    name: null,
    ability_type: null,
    description: null,
    body: null
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
