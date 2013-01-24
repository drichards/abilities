class Abilities.Models.Ability extends Backbone.Model
  paramRoot: 'ability'

  defaults:
    name: null
    type: null
    description: null
    body: null

class Abilities.Collections.AbilitiesCollection extends Backbone.Collection
  model: Abilities.Models.Ability
  url: '/abilities'
