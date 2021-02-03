const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(array) {
  const letterCount = {};
  for (const letter of array.toUpperCase()) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

//TEST CODE
const result1 = countLetters("LIGHOUSE labs");

assertEqual(result1["L"], 3);
assertEqual(result1["X"], undefined);