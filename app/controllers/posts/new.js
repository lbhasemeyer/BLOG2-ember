import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newPost: function() {
      var controller = this;
      var title = this.get('titleHere');
      var body = this.get('bodyHere');

      if (body && title && body.trim() && title.trim()) {
        controller.store.find('user', controller.get('userHere')).then(function(user) {
          var post = controller.store.createRecord('post', { title: title, body: body, user: user });
          controller.set('titleHere', '');
          controller.set('bodyHere', '');
          post.save().then(function(){
            controller.transitionToRoute('posts');
          });
        });
      }
    }
  }
});
