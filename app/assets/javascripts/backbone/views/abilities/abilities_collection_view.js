Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.AbilitiesCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: "abilities-list",

  initialize: function() {
    this.collection = this.options.collection;
    this.views = {};
    this.addAll();
  },

  addAll: function() {
    this.collection.each(this.addOne, this);
  },

  addOne: function(ability) {
    ability.on("drag:start", this.dragStart, this);
    ability.on("drag:enter", this.dragEnter, this);
    ability.on("drag:end", this.dragEnd, this);

    this.views[ability.id] = new Abilities.Views.Abilities.AbilityView({model: ability});
  },

  dragStart: function(model) {
    this.dragging = model;
  },

  dragEnd: function(model) {
    this.dragging = undefined;
    this.collection.saveAll();
  },

  dragEnter: function(model) {
    if (this.dragging == undefined || this.dragging == model) {
        return;
    }

    if (model.get("order") > this.dragging.get("order")) {
        _.each(
            this.collection.filter(function(item) {
                return item.get("order") > this.dragging.get("order") &&
                    item.get("order") <= model.get("order");
            }, this), 
            function(item) {
                item.set("order", item.get("order") - 1);   
            }, 
            this
        );
        this.dragging.set("order", model.get("order") + 1);
    } else {
        _.each(
            this.collection.filter(function(item) {
                return item.get("order") < this.dragging.get("order") &&
                    item.get("order") >= model.get("order");
            }, this), 
            function(item) {
                item.set("order", item.get("order") + 1);   
            }, 
            this
        );
        this.dragging.set("order", model.get("order") - 1);
    }

    this.collection.sort();
    this.render();
  },

  render: function() {
    $(this.el).html("");

    this.collection.each(this.renderOne, this);
    return this;
  },

  renderOne: function(model) {
    $(this.el).append(this.views[model.id].render().el);
  }
});
