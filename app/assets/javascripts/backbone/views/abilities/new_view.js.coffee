Abilities.Views.Abilities ||= {}

class Abilities.Views.Abilities.NewView extends Backbone.View
  template: JST["backbone/templates/abilities/new"]

  events:
    "submit #new-ability": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (ability) =>
        @model = ability
        window.location.hash = "/#{@model.id}"

      error: (ability, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    $(@el).html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
