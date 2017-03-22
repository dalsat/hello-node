var assert = require('assert');
var core = require('../src/core');

describe('main', function() {
  describe('#log', function(){
    it('testing hello world', function() {
      assert.equal('Hello World', core.log());
    });
  });
});