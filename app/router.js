import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('search');
    this.route('new');
    this.resource('post', { path: '/:post_id' }, function() {
      this.route('edit', { path: '/edit' });
    });
  });
  this.resource('users', function() {
    this.route('new');
    this.resource('user', { path:'/:user_id'}, function() {
      this.route('edit');
    });
  });
});

export default Router;
