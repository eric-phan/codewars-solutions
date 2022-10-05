// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  // ...
  const splitter = numbers.split(" ");
  const numArr = splitter.map(Number);
  console.log(numArr);
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  return `${max} ${min}`;

  // You need to SPREAD the array out to the function!
}
