import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    updateUser: function(user) {
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');

      if (firstName && lastName && firstName.trim() && lastName.trim()) {
        user.set('firstName', firstName);
        user.set('lastName', lastName);
        user.save().then(function(){
          this.transitionToRoute('users');
        }.bind(this));
      }
    }
  }

});
