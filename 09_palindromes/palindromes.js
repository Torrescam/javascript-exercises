const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reverseSrt = cleanStr.split("").reverse().join("");

  return cleanStr === reverseSrt;
};

// Do not edit below this line
module.exports = palindromes;
