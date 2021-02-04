const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

//input object + key value
//go throught object key values, if value is there return key name and quit
//if value not found, return undefined
//output string with key name of the researched value
const findKeyByValue = function(object, value) {
  const keysOfObject = Object.keys(object);
  for (const key of keysOfObject) {
    if (object[key] === value) {
      return object[key];
    }
  }
};

//TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);