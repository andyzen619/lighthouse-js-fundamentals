function loopyLighthouse(range, multiples, words) {
  let i = range[0];
  let end = range[1];
  for (i; i <= end; i++) {
    var firstMultiple = i % multiples[0];
    var secondMultiple = i % multiples[1];
    console.log(firstMultiple === 0 && secondMultiple === 0 ? words[0].concat(words[1]) : (firstMultiple === 0 ? words[0] : secondMultiple === 0 ? words[1] : i));
  }
}