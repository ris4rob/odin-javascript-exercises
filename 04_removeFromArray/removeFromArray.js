const removeFromArray = function (array, ...args) {
  // argsArray turns all argument into an array using Array.from(arguments)
  let argsArray = Array.from(arguments);

  // remove original array
  argsArray.shift();

  // filter each argument value from array
  const filterArray = array.filter((arg) => argsArray.indexOf(arg) === -1);

  // return filtered array
  return filterArray;

  // return array.filter((arr) => arr != args);
};

// Do not edit below this line
module.exports = removeFromArray;
