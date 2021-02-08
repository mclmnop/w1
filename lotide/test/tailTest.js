const assert = require('chai').assert;
const tail  = require('../tail');

describe("#tail", () => {
  it("returns pomme,poire for ['pomme,'poire','ananas']", () => {
    assert.deepEqual(tail(["pomme", "poire", "ananas"]), ["poire", "ananas"]);
  });
  it("returns [2,3,4] [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });
  it("returns empty array if array is empty", () => {
    assert.deepEqual(tail([]), []);
  });
});