const reverseString = require('./reverseString');

test('Should be reverse String', () => {
  expect(reverseString('HELLO')).toBe('OLLEH');
});
