const request = require('supertest');
const app = require('./server');

xdescribe('Test the root path', () => {
  it('It should response the GET method', () => {
    return request(app).get('/').expect(200);
  });
});

// To wrap the horrible try catch block can use
const supertestWithJest = (err, res, done, asserts) => {
  try {
    expect(err).toBeNull();
    asserts();
    done();
  } catch (err) {
    done.fail(err);
  }
};

xdescribe('I can use the REST api', () => {
  it('displays text for the landing page', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        supertestWithJest(err, res, done, () => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual('You have reached the SPDZ Rest interface. See ....');
        });
      });
  });
});
