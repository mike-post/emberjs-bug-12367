import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar', function() {
      this.route('baz');
    });
  });
  this.route('loading');
});

export default Router;
