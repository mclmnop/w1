const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['pumpkin', 3] for [5,0,7,'pumpkin',3,4,6,7]", () => {
    assert.deepEqual(middle([5,0,7,'pumpkin',3,4,6,7]), ['pumpkin', 3])
  });
  it("returns ['word'] for [6,7,'word','silex',9]", () => {
    assert.deepEqual(middle([6,7,'word','silex',9]), ['word'])
  });
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3])
  });
  it("returns [7,8] for [6,7,8,10]", () => {
    assert.deepEqual(middle([6,7,8,10]), [7,8])
  });
})
