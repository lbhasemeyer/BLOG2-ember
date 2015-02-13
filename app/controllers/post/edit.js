import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    updatePost: function(post) {
      var title = this.get('title');
      var body = this.get('body');

      if (body && title && body.trim() && title.trim()) {
        post.set('title', title);
        post.set('body', body);
        post.save().then(function(){
          this.transitionToRoute('posts');
        }.bind(this));
      }
    }
  }

});
