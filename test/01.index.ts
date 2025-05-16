'use strict';
require('dotenv').config();
var expect = require('chai').expect;
var assert = require('chai').assert;
const wazepf = require('../dist/index.js');

before(function(done) {
  this.timeout(20000000);
  done();
});

// beforeEach(function() {
//   return cw1.Cityworks.configure(process.env.domain, {path: process.env.install_path});
// });

describe('[Waze (construct)] function test', () => {
    it('should return a Waze Partner Feed object', (done) => {
        assert.isObject(wazepf, 'cw is an object');
        done();
    });
    it('should not have a token set if authentication not run', (done) => {
      assert.isUndefined(wazepf.Token);
      done();
    });
});

describe('[Waze::authenticate] function test', () => {
  it('should have a token set, if login valid', (done) => {
  })
});

describe('[wazepf::validateToken] function test', () => {
  it('should have a valid token set, if logged in', (done) => {
  })
})

describe('[Waze::setToken] function test', () => {
  it('should have set token', (done) => {
  })
})
