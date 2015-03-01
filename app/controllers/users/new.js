import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newUser: function() {
      var firstName = this.get('firstNameHere');
      var lastName = this.get('lastNameHere');

      if (firstName && lastName && firstName.trim() && lastName.trim()) {
        var user = this.store.createRecord('user', { firstName: firstName, lastName: lastName });
        this.set('firstNameHere', '');
        this.set('lastNameHere', '');
        user.save().then(function(){
          this.transitionToRoute('users');
        }.bind(this));
      }
    }
  }
});
