// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the i passed in. Additionally, if the i is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;
  for (i = 1; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      sum += i;
    } else if (i % 3 == 0) {
      sum += i;
    } else if (i % 5 == 0) {
      sum += i;
    } else if (i < 0) {
      return 0;
    }
  }
  return sum;
}

console.log(solution(10));

// PREP
//  return i < number
// multiples of 3 OR 5
// if number is negative, return 0
// obtain SUM of the multiples
