const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


assertArraysEqual(tail(["pomme", "poire", "ananas"]), "poire");
assertArraysEqual(tail(["pomme", "poire", "ananas"]), ["poire", "ananas"]);
assertArraysEqual(tail([1,2,3,4]), [2,3,4]);
const originalArray = ["one", "two", "three"];
const result = tail(originalArray);
assertEqual(result.length, 3);