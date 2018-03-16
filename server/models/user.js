const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  favoriteFood: String
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);



