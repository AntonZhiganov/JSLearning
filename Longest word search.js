function findLongestWordLength(str) {
  
  let counter = 0;
  let wordCount = str.length 
  let longestWord = 0;
  let index = 0;
  while (index < wordCount) {

    if(str[index] !== " " && str[index] !== "" && str[index] !== undefined) {
      counter++;
      index++;
    }

    else {
        if (counter > longestWord){
          longestWord = counter;
        }
      counter = 0;
      index++;
    }

    if (counter > longestWord) {
    longestWord = counter;
}
  }
  return  longestWord;

}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));