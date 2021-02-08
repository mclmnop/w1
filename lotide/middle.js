/*define a function which returns the middle of an array
if the length of the array is even, return an array;
*/

const middle = function(array) {
  //if the number of element of the array is lower than 2, we should return an empty array
  if (array.length <= 2) {
    return [];
  }
  //if the number of element of the array is even, we should return an array with the two middle numbers ( floorlength / 2)
  if (array.length % 2 === 0) {
    const indexMiddleFirst = array.length / 2 - 1;
    return array.splice(indexMiddleFirst, 2);
  } else if (array.length % 2 !== 0) {
  //if the number of element of the array is odd, we should return  an array with the middle number (length / 2)
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;