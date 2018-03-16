module.exports = User => ({
  list(req, res) {
    User.find().sort('name').lean().exec((err, users) => {
      err 
        ? res.status(500).send(err.message)
        : res.json(users);
    });
  },
  get(req, res) {
    if (!req.params.user) {
      return res.status(500).send("user id required");
    }
    User.findOne({_id: req.params.user}, 'name favoriteFood', { lean: true }, (err, user) => {
      err
        ? res.status(404).send(err.message)
        : res.json(user);
    });
  },
  del(req, res) {
    if (!req.params.user) {
      return res.status(500).send("user id required");
    }
    User.deleteOne({_id: req.params.user}, err => {
      err
        ? res.status(404).send(err.message)
        : res.json({
          success: true,
          delete: req.params.user
        });
    });
  },
  post(req, res) {
    const user = {
      name: req.body.name,
      favoriteFood: req.body.favoriteFood
    }
    User.create(user, (err, created) => {
      err
        ? res.status(500).send(err.message)
        : res.json({
          success: true,
          user: created.toObject()
        });
    });
  },
  put(req, res) {
    // validations ...
    const user = {
      name: req.body.name,
      favoriteFood: req.body.favoriteFood
    };
    User.update({_id: req.params.user}, user, (err, updated) => {
      err
        ? res.status(500).send(err.message)
        : res.json({
          success: updated.ok === 1
        });
    });
  }
});
