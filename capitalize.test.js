const capitalize = require('./capitalize');

test('Should be capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Should be NOT capitalize', () => {
  expect(capitalize('hello')).not.toBe('hello');
});
