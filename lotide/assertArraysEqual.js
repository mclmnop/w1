/*
takes 2 arrays as input
runs eqArrays which compares the length and the content of the 2 arrays
returns a message with pass if length is equal, failed if not
*/ 

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🥳🥳🥳 Assertion passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;