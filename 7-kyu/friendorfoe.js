// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.
function friend(friends) {
  const filtered = friends.filter((element) => element.length === 4);
  return filtered;
}
// function friend(friends){
//   Using loops
//   var realFriends = [];
//   for(i=0; i<friends.length; i++){
//     if(friends[i].length == 4 && isNaN(friends[i])){
//       realFriends.push(friends[i]);
//     }
//   }

//   return realFriends
// }
