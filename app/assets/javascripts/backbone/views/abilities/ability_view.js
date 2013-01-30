Abilities.Views.Abilities = Abilities.Views.Abilities || {};

Abilities.Views.Abilities.AbilityView = Backbone.View.extend({
  template: JST["backbone/templates/abilities/ability"],
  tagName: "li",

  show: function() {
    var view = new Abilities.Views.Abilities.ShowView({model : this.model});
    view.render();
  },

  dragStart: function(e) {
      this.model.trigger("drag:start", this.model);
      this.dragging = true;
      this.render();
  },

  dragEnter: function(e) {
      this.model.trigger("drag:enter", this.model);
  },

  dragEnd: function(e) {
      this.model.trigger("drag:end", this.model);
      this.dragging = false;
      this.render();
  },

  dragOver: function(e) {
      return false;
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON() ));

    $(this.el).addClass(this.model.get("ability_type"));
    $(this.el).attr("draggable", true);

    $(this.el).on("dragstart", _.bind(this.dragStart, this));
    $(this.el).on("dragenter", _.bind(this.dragEnter, this));
    $(this.el).on("dragend", _.bind(this.dragEnd, this));
    $(this.el).on("dragover", _.bind(this.dragOver, this));
    $(this.el).on("click", _.bind(this.show, this));

    if (this.dragging) {
        $(this.el).addClass("dragging");
    }

    return this;
  }
});
