import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    newComment: function(){
      var controller = this;
      var body = this.get('bodyHere');

        controller.store.find('post', controller.get('id')).then(function(post){
          controller.store.find('user', controller.get('userHere')).then(function(user){
            var comment = controller.store.createRecord('comment', { body: body, user: user, post: post });
             comment.save().then(function(){
              controller.transitionToRoute('posts');
            });
          });
        });
      controller.set('bodyHere', '');
    }
  }
});
