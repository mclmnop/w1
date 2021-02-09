const {expect} = require('chai');
const eqArrays = require('../eqArrays');

describe("#eqObjects", () => {
  it("returns true if 2 arrays have same length and values", () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });
  it("returns false if 2 arrays have same length, but not same values", () => {
    expect(eqArrays([1, 2, 3], [1, 3, 3])).to.not.be.true;
  });
  it("returns false if 2 arrays have same length, but not same values and different types", () => {
    expect(eqArrays([1, 2, 3], [1, 4, "cheval"])).to.not.be.true;
  });
  it("returns false if 2 arrays note have same length", () => {
    expect(eqArrays([1, 2, 3, 5], [1, 4, "cheval"])).to.not.be.true;
  });
});

