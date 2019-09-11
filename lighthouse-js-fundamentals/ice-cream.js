// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
let modified = iceCreamFlavours.slice();
modified.push("root beer");

console.log(modified);
console.log(iceCreamFlavours);

console.log(iceCreamFlavours.find(0));

console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);

console.log(iceCreamFlavours.length);