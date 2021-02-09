const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //create array with both object keys
  const keyListFirst = Object.keys(object1);
  const keyListSecond = Object.keys(object2);

  //if length is different, return false
  if (keyListFirst.length !== keyListSecond.length) {
    return false;
  }
  //iterate through the array of the first object, is a value is not found in the second object, return false
  for (const key of keyListFirst) {
    if (!object2[key]) {
      return false;
    } else if (Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object2[key] !== object1[key]) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;