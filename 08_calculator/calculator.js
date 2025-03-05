const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
};

const multiply = function (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
