const repeatString = function (string, time) {
  if (time < 0) return "ERROR";
  let outputString = "";
  for (let i = 0; i < time; i++) {
    outputString += string;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
