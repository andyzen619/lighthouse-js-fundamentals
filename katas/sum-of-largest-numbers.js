let sumLargestNumbers = function(data) {
  // Put your solution here
  let first = 0;
  let second = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > first) {
      second = first;
      first = data[i];
    } else {
      if (data[i] > second) {
        second = data[i];
      }
    }
  }
  return first + second;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));