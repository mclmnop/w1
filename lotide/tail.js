const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(tail([1,2,3,4,5,6]));
console.log(tail(["pomme", "poire", "ananas"]));
assertEqual(tail(["pomme", "poire", "ananas"]), "poire");
assertEqual(tail(["pomme", "poire", "ananas"]), ["poire", "ananas"]);
assertEqual(tail([1,2,3,4]), [2,3,4]);
assertEqual(tail([1,2,3,4].length), 3);
console.log(tail([]));
console.log(tail(["Only one"]));
const originalArray = ["one", "two", "three"];
tail(originalArray);
assertEqual(originalArray.length, 3);