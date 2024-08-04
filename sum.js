function sum(...arg) {
  if (arg.some((num) => isNaN(num))) {
    throw new Error("the entered values must be all numbers");
  } else {
    return arg.reduce((a, b) => a + b, 0);
  }
}
module.exports = sum;
