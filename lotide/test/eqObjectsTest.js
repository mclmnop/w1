const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
const eqObjects = require('../eqObjects');

 describe("#eqObjects", () => {
  it("returns true if 2 objects have same key values"), () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    console.log('Allo', eqObjects(ab, ba));
    try {
      assert.strictEqual(eqObjects(ab, ba), true);
    }catch(err) {
      console.log(err);
    }

  }
});

//TEST CODE
/*  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const da = { d: "4", a: "1" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, da), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd), true);s

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); */ 