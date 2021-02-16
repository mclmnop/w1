
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let newArray = [];
  for (let elem = 0; elem < array.length; elem++) {
    if (Array.isArray(array[elem])) {
      array[elem].forEach(element => {
        newArray.push(element);
      });
    } else {
      newArray.push(array[elem]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2,[3, 4], 5, [6]]));
console.log(flatten([1, 2, ["chien", "chat"], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
flatten([1, 2,[3, 4], 5, [6]]);
assertArraysEqual(flatten([1, 2,[3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
