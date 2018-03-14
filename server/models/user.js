const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_testing');

const UserSchema = new mongoose.Schema({
  name: String,
  favoriteFood: String
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);



