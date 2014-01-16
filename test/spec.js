
describe('space', function() {
  var space = require('space');

  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' not equal ' + b);
    }
  }

  it('should add space between Chinese and English', function() {
    assert(space('中E'), '中 E');
  });

  it('should add space between English and Chinese', function() {
    assert(space('E中'), 'E 中');
  });
});
