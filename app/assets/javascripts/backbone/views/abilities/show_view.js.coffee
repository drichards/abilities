Abilities.Views.Abilities ||= {}

class Abilities.Views.Abilities.ShowView extends Backbone.View
  template: JST["backbone/templates/abilities/show"]

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this
