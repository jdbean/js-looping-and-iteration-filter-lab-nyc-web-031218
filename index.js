// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}
function fuzzyMatch(list, letters) {
  let lengthOfLetters = letters.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfLetters ) === letters
  })
}
function matchName(list, name) {
  // let lengthOfLetters = letters.length;
  return list.filter(function (driver) {
    return driver.name === name
  })
}
