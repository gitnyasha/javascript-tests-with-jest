const capitalize = require('./capitalize');

test('Should be capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});
