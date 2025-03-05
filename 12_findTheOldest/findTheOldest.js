const findTheOldest = function (people) {
  const oldestPerson = people.reduce((acomulator, value) => {
    const currentYear = new Date().getFullYear();

    const accDeathYear = acomulator.yearOfDeath || currentYear;
    const valueDeathYear = value.yearOfDeath || currentYear;

    const accAge = accDeathYear - acomulator.yearOfBirth;
    const valueAge = valueDeathYear - value.yearOfBirth;

    return valueAge > accAge ? value : acomulator;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
