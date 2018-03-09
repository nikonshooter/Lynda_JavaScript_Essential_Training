function logscope() {
  let localVar = 2;
  if (localVar) {
    let localVar = "i'm different!";
    console.log("nested localvar: ",localVar);
  }
console.log("logScope localVar: ", localVar);

}
logscope();
