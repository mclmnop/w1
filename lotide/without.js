const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🥳🥳🥳 Assertion passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let compareArr = true;
  for (let arrIndex = 0; arrIndex < array1.length; arrIndex ++) {
    if (array1[arrIndex] !== array2[arrIndex]) {
      compareArr = false;
    }
  }
  return compareArr;
};

const without = function(array, toRemove) {
  for (let elem = array.length - 1; elem >= 0; elem--) {
    for (let elemToDel = 0; elemToDel < toRemove.length; elemToDel++) {
      if (array[elem] === toRemove[elemToDel]) {
        array.splice(elem, 1);
      }
    }
  }
  return array;
};



console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3, 4], [1,4]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without(words, ["lighthouse", "hello"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
