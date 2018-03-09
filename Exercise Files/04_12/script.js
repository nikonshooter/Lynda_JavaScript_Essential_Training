/* function doSomeMath() {
  var a = 5;
  var b = 4;
  // var sum = a + b;
  function multiply() {
    var result = a * b;
    return result;
  }
  // return sum;
  return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
 */

function giveMeEms(pixels) {
  var baseValue = 16;
  function doTheMath() {
    return pixels / baseValue;
  }
  return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var extraLarge = giveMeEms(32);

console.log("small Size: ", smallSize());
console.log("medium Size: ", mediumSize());
console.log("large Size: ", largeSize());
console.log("extralarge Size: ", extraLarge());
