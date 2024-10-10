const assert = require('assert');
const sayHello = require('../index');

describe('SayHello function', () => {
  it('should return Hello, World!', () => {
    assert.strictEqual(sayHello(), 'Hello, World!');
  });
});
