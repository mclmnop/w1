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



//define a function which returns the middle of an array

const middle = function(array) {
  //if the number of element of the array is lower than 2, we should return an empty array
  if (array.length <= 2) {
    return [];
  }
  //if the number of element of the array is even, we should return an array ( floorlength / 2)
  if (array.length % 2 === 0) {
    const indexMiddleFirst = array.length / 2 - 1;
    return [array.splice(indexMiddleFirst, 2)];
  } else if (array.length % 2 !== 0) {
  //if the number of element of the array is odd, we should return  an array with the middle number (length / 2)
    return [array[Math.floor(array.length / 2)]];
  }
};


//TEST CODE
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([6,7,8,10]));
console.log(middle([6,7,"word", "silex", 9]));
console.log(middle([6,7,"word", "silex", 9, 10]));
console.log(middle([5,9]));

const list = [5,0,7,"pumpkin",3,4,6,7];
assertArraysEqual(middle(list), list);