const reverseString = function (string) {
  // let result = '';
  // let length = string.length;

  // if (string === '') {
  //   return string;
  // } else {
  //   for (let i = 1; i < length; i++) {
  //     result += string[length - i];
  //   }
  //   result = result.concat(string[0]);
  //   return result;
  // }
  // refactored code here to one line
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
