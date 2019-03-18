var AppView = Backbone.View.extend({
  el: $('body'),
  // events to listen for
  events: {
    'keypress #video-search': 'seachVideo'
  //  'click #searchButton': 'searchVideo'
  },
  // at start of program we need...
  initialize: function () {
    this.model.get('')

  },


  searchVideo: function(e) {
    if (e.which === 13 && this.$input.val()) {
      this.model.set('query', this.$input.val());
      this.model.get('videos').fetch(this.model.get('query'));
      this.$input.val('');
    }
  },

  renderCurrent: function() {
    this.$('#current-video-template').empty();

    // display current
  },

  renderList: function() {

  }







});
