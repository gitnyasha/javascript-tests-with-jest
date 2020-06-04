const reverseString = require('./reverseString');

test('Should be reverse String', () => {
  expect(reverseString('HELLO')).toBe('OLLEH');
});

test('Should be NOT reverse String', () => {
  expect(reverseString('HELLO')).not.toBe('HELLO');
});
