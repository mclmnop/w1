const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([1,2,3,4,5]), 2);
assertEqual(head([1,"poil",3,4,5]), "poil");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["first"]), "first");
assertEqual(head([]), undefined);