const User = function(props) {
  this._props = Object.assign({
    firstName: '',
    lastName: '',
    favoriteFood: ''
  }, props);
};

User.create = function(props) {
  const u = new User(props)
  return u.save();
};

User.prototype.save = function() {
  return new Promise((resolve, reject) => {
    console.log(this._props);
    resolve();
  })
};

