var InterestingView = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("I am interesting - I can <%= interestingThingOne %> and I can also <%= interestingThingTwo %>!"),
  initialize: function() {
    this.render();
  },
  render: function() {
    var data = {
    interestingThingOne: 'unicycle',
    interestingThingTwo: 'moonwalk'
  };
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
    console.log(this.$el);
    $('body').append(this.$el);
  }
});
