const sumAll = function (a, b) {
  let result = 0;
  do {
    result += a;
    a++;
  } while (a <= b);
  return result;
};

// Do not edit below this line
module.exports = sumAll;
