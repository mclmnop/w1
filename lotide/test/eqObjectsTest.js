const {expect} = require('chai');
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true if 2 objects have same key values", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    expect(eqObjects(ab, ba)).to.be.true;
  });
  it("returns false if 2 objects have same key numbers but not same value", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "2" };
    expect(eqObjects(ab, ba)).to.be.not.true;
  });
  it("returns true if 2 objects have same key values, even with one level nested", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    expect(eqObjects(cd, dc)).to.be.true;
  });
  it("returns false if 2 objects have same number of key but different values, even with one level nested", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    expect(eqObjects(cd, cd2)).to.be.not.true;
  });
});