function uniteUnique () {
  let uniqueValuesArray = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (uniqueValuesArray.includes(arguments[i][j]) === false) {
        uniqueValuesArray.push(arguments[i][j]);
      }
      else {
        continue;
      }
    }
  }
  return uniqueValuesArray;
}