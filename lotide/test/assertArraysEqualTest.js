const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 3, 2]);
assertArraysEqual([1, 2, 3], [1, 4, "cheval"]);
assertArraysEqual([1, 2, 3], []);