Abilities.Views.Abilities ||= {}

class Abilities.Views.Abilities.EditView extends Backbone.View
  template : JST["backbone/templates/abilities/edit"]

  events :
    "submit #edit-ability" : "update"

  update : (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success : (ability) =>
        @model = ability
        window.location.hash = "/#{@model.id}"
    )

  render : ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
