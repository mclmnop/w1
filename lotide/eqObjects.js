const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
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



//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const da = { d: "4", a: "1" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, da), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
