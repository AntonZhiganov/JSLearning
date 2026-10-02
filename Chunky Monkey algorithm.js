function chunkArrayInGroups (array, num) {
  let result = []
  for (let i = 0; i < array.length; i += num) {
    result.push(array.slice(i, i + num));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))