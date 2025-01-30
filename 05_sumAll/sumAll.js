const sumAll = function (num1, num2) {
  if (
    isNaN(num1) ||
    isNaN(num2) ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  let minNum = Math.min(num1, num2);
  let maxNum = Math.max(num1, num2);
  let sum = 0;
  currentNumber = minNum;

  while (currentNumber <= maxNum) {
    sum += currentNumber;
    currentNumber++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
