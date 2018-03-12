const assert = require('assert');
const { join } = require('path');
const request = require('supertest');
const app = require(join(process.cwd(), 'server', 'app'));

const user = 'test';

describe('/users', () => {

  it('should return the username', done => {
    request(app)
      .get(`/users/${user}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.user, user);
        done();
      });
  });

});