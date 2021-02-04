/*create variable to hold the true or false result of the comparison
Compare array elements one by one
if final comparison result is true, return it

*/

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


//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("patate", "patate");
assertEqual(1,1);
assertEqual(1,14);


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 4, "cheval"]), true);