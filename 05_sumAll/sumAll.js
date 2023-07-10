const sumAll = function (a, b) {
  let result = 0;
  
  if typeof a === 'number' && typeof b === 'number' {
    if a < b {
      do {
        result += a;
        a++;
      } while (a <= b);
      return result;
    } else if b > a {
      do {
        result += b;
        b++;
      } while (b <= a);
      return result
    }
  }

// Do not edit below this line
module.exports = sumAll;
