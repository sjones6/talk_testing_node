var Input = require('~/Input.html');
var assert = require('assert');

describe('Input.html', function() {

  it('should mount a input on the DOM', function() {
    var target = document.createElement('div');
    var inp = new Input.default({
      target: target
    });

    assert(inp.options.target == target);
  });

});