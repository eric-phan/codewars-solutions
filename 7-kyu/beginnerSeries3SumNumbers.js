// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
  var array = [];

  if (a < b) {
    for (let i = a; i <= b; i++) {
      array.push(i);
    }
    return array.reduce((pV, cV) => pV + cV, 0);
    //   have to put the console.log/return on the outside of the loop
  } else if (b < a) {
    for (let i = b; i <= a; i++) {
      array.push(i);
    }
    return array.reduce((pV, cV) => pV + cV, 0);
  } else {
    return a;
  }
}

// need to get an array from the two intervals, use a for loop?
// set up an if statement if they are the same
// maybe reduce to sum the numbers from the arr
console.log(getSum(5, 1));
