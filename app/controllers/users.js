import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deleteUser: function(id) {
      this.store.find('user', id).then(function(user){
        user.deleteRecord();
        user.save();
      });
    }
  }
});
