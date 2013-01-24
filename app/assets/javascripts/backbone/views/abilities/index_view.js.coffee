Abilities.Views.Abilities ||= {}

class Abilities.Views.Abilities.IndexView extends Backbone.View
  template: JST["backbone/templates/abilities/index"]

  initialize: () ->
    @options.abilities.bind('reset', @addAll)

  addAll: () =>
    @options.abilities.each(@addOne)

  addOne: (ability) =>
    view = new Abilities.Views.Abilities.AbilityView({model : ability})
    @$("tbody").append(view.render().el)

  render: =>
    $(@el).html(@template(abilities: @options.abilities.toJSON() ))
    @addAll()

    return this
