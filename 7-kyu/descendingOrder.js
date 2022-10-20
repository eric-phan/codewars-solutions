// Your task is to make a function that can take any non-negative integer as an argument and return 
// it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  //... take number, turn slice into an array
  let reversed = n
    .toString()
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
  //   arrange/sort array big to large,
  //   join the array
  //   return that string
  return parseInt(reversed);
}
