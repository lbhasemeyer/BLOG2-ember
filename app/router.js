import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', {path: '/'}, function() {
    this.route('search');
    this.route('new');
    this.resource('post', { path: '/posts/:post_id' }, function() {
      this.route('edit', { path: '/posts/edit' });
      this.route('comments', function() {
        this.route('new');
      });
    });
  });
  this.resource('users', function() {
    this.route('new');
    this.resource('user', { path:'/:user_id'}, function() {
      this.route('edit', { path: '/edit' });
    });
  });
});

export default Router;
