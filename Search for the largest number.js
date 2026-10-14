function largestOfAll (userArray) {

  let maxNumbers = new Array(userArray.length).fill(0);

  for (let i = 0; i < userArray.length; i++) {
    for (let j = 0; j < userArray[i].length; j++) {
      if (maxNumbers[i] === 0) {
        maxNumbers[i] = userArray[i][j]
      }
      if (userArray[i][j] > maxNumbers[i]) {
        maxNumbers[i] = userArray[i][j];
      }
      else {
        continue;
      }
    }
  }
  return maxNumbers;
}

console.log(largestOfAll([[0, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [0, -3, -17, -10]]))