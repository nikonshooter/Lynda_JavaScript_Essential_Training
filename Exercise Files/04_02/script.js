function findBiggestFraction(a, b) {
  // console.log("The funcion is running!");
  // console.log("blah);
  // a > b ? console.log("a: ", a) : console.log("b: ", b);
  var result;
  if (a > b) {
    result = ["ff", a]
  } else {
    result = ["sf", b]
  }
  return result;
}

var ff = 3 / 4;
var sf = 5 / 7;
var fractionResult = findBiggestFraction(ff, sf);
// findBiggestFraction(9 / 16, 5 / 32);
console.log(fractionResult);
