const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🥳🥳🥳 Assertion passed: ${inspect(object1)} ===  ${inspect(object2)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqArrays = function(array1, array2) {
  let compareArr = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let arrIndex = 0; arrIndex < array1.length; arrIndex ++) {
    if (array1[arrIndex] !== array2[arrIndex]) {
      compareArr = false;
    }
  }
  return compareArr;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
assertObjectsEqual(abc, ab);

module.exports = assertObjectsEqual;

