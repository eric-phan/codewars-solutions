// Your task is to write function factorial.

function factorial(n) {
  var sum = 1;
  if (n === 0 || n < 0) {
    return 1;
  }
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
