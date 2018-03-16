const assert = require('assert');
const { join } = require('path');
const request = require('supertest');
const app = require('app');

const user = 'test';

describe('/users', () => {

  let userID;
  describe('post', () => {
    it('should return the value on create', done => {
      request(app)
        .post(`/users`)
        .send({
          name: user,
          favoriteFood: 'spaghetti'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert.equal(response.body.user.name, user);
          userID = response.body.user._id;
          done();
        })
        .catch(done);
    });
  });

  describe('put', () => {
    it('should update the record and return it', done => {
      let favoriteFood = 'lasagna';
      request(app)
        .put(`/users/${userID}`)
        .send({
          name: user,
          favoriteFood 
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert.equal(response.body.success, true);
          done();
        })
        .catch(done);
    });

    it('should return a 404 for records that dont exist', done => {
      request(app)
        .post(`/users/does_not_exist`)
        .send({
          name: user,
          favoriteFood: 'chocolate'
        })
        .expect(404)
        .then(response => done())
        .catch(done);
    });
  })

  describe('get', () => {
    it('should return the record as JSON', done => {
      request(app)
        .get(`/users/${userID}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert.equal(response.body.name, user);
          assert.equal(response.body._id, userID);
          done();
        })
        .catch(done);
    });

    it('should return a 404 when the record does not exists', done => {
      request(app)
        .get(`/users/does_not_exist`)
        .expect(404)
        .then(response => {
          done();
        })
        .catch(done);
    });
  });

  describe('get all', () => {
    it('should return the records as JSON', done => {
      request(app)
        .get(`/users`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert.equal(response.body.length, 1);
          assert.equal(response.body[0]._id, userID);
          done();
        })
        .catch(done);
    });
  });

  // will also clean up records
  describe('delete', () => {
    it('should return a 404 when no id not provided', done => {
      request(app)
        .delete(`/users`)
        .expect(404)
        .then(response => done())
        .catch(done);
    });

    it('should return a 404 error when id does not match a record', done => {
      request(app)
        .delete(`/users/does_not_exist`)
        .expect(404)
        .then(response => done())
        .catch(done);
    });

    it('should delete with success', done => {
      request(app)
        .delete(`/users/${userID}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert.equal(response.body.delete, userID);
          done();
        })
        .catch(done);
    });
  });

});