const whichSchool = function(age) {
    // Your code in here ...
    let level;
    return level = age < 13 ? "Elementary School" : (age <= 18 ? "Secondary School" : "Lighthouse Labs");
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));