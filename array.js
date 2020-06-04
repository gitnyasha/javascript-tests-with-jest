function analyze(array) {
  let average = array.reduce((prev, cur) => prev + cur, 0) / array.length;
  let min = array.reduce((prev, cur) => (prev < cur ? prev : cur));
  let max = array.reduce((prev, cur) => (prev > cur ? prev : cur));
  let length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}
module.exports = analyze;
