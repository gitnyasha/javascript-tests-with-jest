function analyze(array) {
  const average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
  const min = array.reduce((prev, cur) => (prev < cur ? prev : cur));
  const max = array.reduce((prev, cur) => (prev > cur ? prev : cur));
  const { length } = array;

  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = analyze;
