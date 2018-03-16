var NewUser = require('~/NewUser.html');
var assert = require('assert');

describe('NewUser.html', function() {

  it('should mount a input on the DOM', function() {
    var target = document.createElement('div');
    var inp = new NewUser.default({
      target: target
    });

    assert(inp.options.target == target);
  });

});