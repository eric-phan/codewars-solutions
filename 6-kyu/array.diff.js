// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter((aNum) => !b.includes(aNum));
  // You are returning whatever is NOT aNum from a.
}

// P - two lists, a & b.

// R - return a list.

// E-
// arrayDiff([1,2],[1]) == [2
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// P- can run a for loop, if b in a, pop every instance of the occurence?
// using an arr method like filter can work too.
