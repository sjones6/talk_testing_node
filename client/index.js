console.log("hello worlds!");

var App = require('./App.html');

new App.default({
  target: document.querySelector("#app")
});