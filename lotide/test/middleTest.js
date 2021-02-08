const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
const list = [5,0,7,"pumpkin",3,4,6,7];
const result = middle(list);
assertArraysEqual(result, ["pumpkin",3]);

assertArraysEqual(middle([6,7,"word", "silex", 9]), ["word"]); //true
assertArraysEqual(middle([6,7,"word", "silex", 9, 10]), ["word"]); //false
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //true
assertArraysEqual(middle([6,7,8,10]), [7,8]); //true