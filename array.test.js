const analyze = require('./array');

test('calculates average', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('returns minimum number', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test('returns maximum number', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('calculates length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
