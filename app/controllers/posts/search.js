import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    doSearch: function() {
      var input = this.get('term');
      this.store.find('post', {find: input}).then(function (res) {
        this.set('model', res);
      }.bind(this));
    }
  }
});
