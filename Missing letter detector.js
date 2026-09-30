function fearNotLetter (userAlphabet) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = 0;
  let letterCount = userAlphabet.length;
  let missingLetter;
  let startPosition = alphabet.indexOf(userAlphabet[0])
  let counter = startPosition;

  while (index < letterCount) {

    if (alphabet[counter] === userAlphabet[index]) {
      index++;
      counter++;
    }

    else {
      missingLetter = alphabet[counter];
      return missingLetter
    }

  }

}

console.log(fearNotLetter("abdef"))