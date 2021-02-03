//input = string
//go through the string, create on key per letter, add the indexof in an array
//if the key already exist, push the new index in the value array
//output an object key = letter, value = array eith index of all occurrences

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};


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


//TEST CODE
const result1 = letterPositions("hello");
assertArraysEqual(result1["l"], [2, 3]);
console.log(letterPositions("goodbye"));

