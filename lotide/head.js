const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳🥳🥳 Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

//console.log(head([1,2,3,4,5]));
assertEqual(head([1,2,3,4,5]), 2);
assertEqual(head([1,"poil",3,4,5]), "poil");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["first"]), "first");
assertEqual(head([]), undefined);
