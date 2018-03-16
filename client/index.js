var App = require('./App.html');
var { Store } = require('svelte/store.js');

Store.prototype.addUser = function(user) {
  var users = this.get('users').concat([user]);
  this.set({ users: users });
}

Store.prototype.removeUser = function(id) {
  var users = this.get('users').filter(function(user) {
    return user._id !== id;
  });
  this.set({users: users});
}

const store = new Store({
  users: []
});

new App.default({
  target: document.querySelector("#app"),
  store: store
});