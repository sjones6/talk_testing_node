const mongoose = require('mongoose');

if (process.env.NODE_ENV !== "testing") {
  mongoose.connect('mongodb://localhost:27017/node_testing');
}

module.exports = {
  User: require("./user.js")
}
