const sinon = require('sinon');
const assert = require('assert');
const { User } = require('app/models');
const UserController = require('app/controllers/users.js');

describe("UserController", () => {

  let controller;
  beforeEach(() => {
    controller = UserController(User);
  });

  afterEach(() => {
  });

  describe("POST", () => {
    beforeEach(() => {
      sinon.stub(User, "create").returns(null);
    });

    afterEach(() => {
      User.create.restore();
    });

    it("should use the post body to create a new user", () => {
      let body = {
        name: 'spencer',
        favoriteFood: 'spaghetti'
      }
      let req = { body };
      controller.post(req);
  
      let call = User.create.getCall(0);
      assert.deepStrictEqual(body, call.args[0]);
      assert.strictEqual(typeof call.args[1], 'function');
    });
  });

});