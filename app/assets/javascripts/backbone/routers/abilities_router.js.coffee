class Abilities.Routers.AbilitiesRouter extends Backbone.Router
  initialize: (options) ->
    @abilities = new Abilities.Collections.AbilitiesCollection()
    @abilities.reset options.abilities

  routes:
    ""                    : "index"
    "new"                 : "newAbility"
    ":id/edit"            : "edit"
    ":id"                 : "show"

  newAbility: ->
    @view = new Abilities.Views.Abilities.NewView(collection: @abilities)
    $("#abilities").html(@view.render().el)

  index: ->
    @view = new Abilities.Views.Abilities.IndexView(abilities: @abilities)
    $("#abilities").html(@view.render().el)

  show: (id) ->
    ability = @abilities.get(id)

    @view = new Abilities.Views.Abilities.ShowView(model: ability)
    $("#abilities").html(@view.render().el)

  edit: (id) ->
    ability = @abilities.get(id)

    @view = new Abilities.Views.Abilities.EditView(model: ability)
    $("#abilities").html(@view.render().el)
