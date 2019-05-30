let account = require('../app/model/account');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
describe('/GET api/accounts', () => {
    it('it should GET all the accounts', (done) => {
          chai.request(server)
          .get('/api/accounts')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.length > 0
            done();
          });
    });
});
/*
  * Test the /GET/:id route
  */
 describe('/GET:accountId api/accounts', () => {
    it('it should GET all the accounts', (done) => {
          chai.request(server)
          .get('/api/accounts/1')
          .end((err, res) => {
                res.should.have.status(200);           
            done();
          });
    });
});

