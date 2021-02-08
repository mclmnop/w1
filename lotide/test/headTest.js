const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 1 for [1,2,3,4,5]", () => {
    assert.strictEqual(head([1,2,3,4,5]), 1);
  });
  it("returns Hello for ['Hello', 'Lighthouse', 'labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'labs']), 'Hello');
  });
  it("returns undefined if array is empty", () => {
    assert.strictEqual(head([]), undefined);
  });
});