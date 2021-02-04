

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🥳🥳🥳 Assertion passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${array1} !== ${array2}`);
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
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 4, "cheval"]);
assertArraysEqual([1, 2, 3], []);