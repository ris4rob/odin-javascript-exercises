const sumAll = function (a, b) {
  let result = 0;

  if (typeof a === 'number' && typeof b === 'number' && a >= 0 && b >= 0) {
    if (a < b) {
      do {
        result += a;
        a++;
      } while (a <= b);
      return result;
    } else if (a > b) {
      do {
        result += b;
        b++;
      } while (b <= a);
      return result;
    }
  } else {
    return 'ERROR';
  }
};
// Do not edit below this line
module.exports = sumAll;
