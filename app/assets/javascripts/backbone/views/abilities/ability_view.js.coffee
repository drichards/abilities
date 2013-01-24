Abilities.Views.Abilities ||= {}

class Abilities.Views.Abilities.AbilityView extends Backbone.View
  template: JST["backbone/templates/abilities/ability"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    $(@el).html(@template(@model.toJSON() ))
    return this
