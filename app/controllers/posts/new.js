import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newPost: function() {
      var title = this.get('titleHere');
      var body = this.get('bodyHere');

      if (body && title && body.trim() && title.trim()) {
        var post = this.store.createRecord('post', { title: title, body: body });
        this.set('titleHere', '');
        this.set('bodyHere', '');
        post.save().then(function(){
          this.transitionToRoute('posts');
        }.bind(this));
      }
    }
  }
});
