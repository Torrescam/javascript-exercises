const removeFromArray = function () {
  const args = Array.from(arguments);

  for (let i = 1; i < args.length; i++) {
    args[0] = args[0].filter((elements) => elements !== args[i]);
  }
  return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
