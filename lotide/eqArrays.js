/*create variable to hold the true or false result of the comparison
Compare the length of the 2 arrays, if different return false
Compare array elements one by one
if final comparison result is true, return it
*/


const eqArrays = function(array1, array2) {
  let compareArr = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let arrIndex = 0; arrIndex < array1.length; arrIndex ++) {
    if (array1[arrIndex] !== array2[arrIndex]) {
      compareArr = false;
    }
  }
  return compareArr;
};



module.exports = eqArrays;