const calculator = require('./calculator');

test('Should be add 2 + 2 is 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Should be add 2 + 2 NOT is 4', () => {
  expect(calculator.add(2, 2)).not.toBe(5);
});

test('Should be subtract 2 - 1 is 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('Should be subtract 2 - 1 NOT is 2', () => {
  expect(calculator.subtract(2, 1)).not.toBe(2);
});

test('Should be multiply 2 * 2 is 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('Should be multiply 2 * 2 NOT is 6', () => {
  expect(calculator.multiply(2, 2)).not.toBe(6);
});

test('Should be divide 2 / 2 is 1', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('Should be divide 2 + 2 NOT is 0', () => {
  expect(calculator.divide(2, 2)).not.toBe(0);
});
