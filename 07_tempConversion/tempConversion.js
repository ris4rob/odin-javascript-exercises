const convertToCelsius = function (temperature) {
  let fahrenheit = (temperature - 32) / 1.8;

  if (fahrenheit % 1 === 0) {
    return fahrenheit;
  } else {
    return parseFloat(fahrenheit.toFixed(1));
  }
};

const convertToFahrenheit = function (temperature) {
  let celsius = temperature * 1.8 + 32;

  if (celsius % 1 === 0) {
    return celsius;
  } else {
    return parseFloat(celsius.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
