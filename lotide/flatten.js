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

const flatten = function(array) {
  //let newArray = array.flat();
  let newArray = [];
  for (let elem = 0; elem < array.length; elem++) {
    //console.log("inside first loop" + newArray);
    if (Array.isArray(array[elem])) {
      let nestedArray = JSON.stringify(array[elem]).replace(/\[/, '').replace(/\]/, '');
      //console.log(`nested with replace ${nestedArray}`)
      
      newArray.push(nestedArray);
      //console.log( "adding nested array content" + newArray);
    } else {
      newArray.push(array[elem]);
    }
  }
  return (newArray.join(', '));
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
flatten([1, 2, ["chien", "chat"], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
flatten([1, 2, [3, 4], 5, [6]]);
