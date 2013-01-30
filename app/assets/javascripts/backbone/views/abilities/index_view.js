Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.IndexView = Backbone.View.extend({
  NUM_COLUMNS: 4,

  template: JST["backbone/templates/abilities/index"],

  el: "#abilities",

  events: {
    "click .new": "newAbility"
  },

  initialize: function() {
    this.collections = [];
    for (var i = 0; i < this.NUM_COLUMNS; i++) {
        var collection = new Abilities.Collections.AbilitiesCollection(
            _.filter(this.options.abilities, function(item) {
                return item.column == i;
            }),    
            {column: i}
        );

        collection.on('add', this.render, this);

        this.collections[i] = collection;
    }

    this.render();
  },

  newAbility: function() {
    var view = new Abilities.Views.Abilities.NewView({
        collection: this.collections[0]
    });

    this.$("#shown-ability").html(view.render().el);
    return false;
  },

  addAll: function() {
    _.each(this.collections, this.addOne, this);
  },

  addOne: function(collection) {
    var view = new Abilities.Views.Abilities.AbilitiesCollectionView({collection: collection});
    var rendered = view.render().el;
    var abilities_lists = this.$("#abilities-lists");
    abilities_lists.append(rendered);

    if (abilities_lists.height() < $(rendered).height()) {
        abilities_lists.height($(rendered).height());
    }
  },

  render: function() {
    $(this.el).html(this.template({}));
    this.addAll();

    return this;
  }
});
