function isPalindrome(word) {
  let smallWord = word.toLowerCase();
  let firstChar = 0;
  let lastChar = smallWord.length - 1;

  while (firstChar < lastChar) {
    if (smallWord[firstChar] !== smallWord[lastChar]) {
      return false;
    }

    firstChar++;
    lastChar--;

  }
  return true;
}

console.log(isPalindrome("Lel"));

function findPalindromeBreaks(words) {
  let isNoPalindrome = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      isNoPalindrome.push(i);
    }
  }
  return isNoPalindrome;
}

console.log(findPalindromeBreaks(["arra", "man", "okoko"]))

function findRepeatedPhrases(words, phraseLength) {
  let indexArr = [];
  const phraseCounts = {};
  const firstIndexMap = {};

  if (phraseLength >= words) {
    return indexArr
  }

  for (let i = 0; i < words.length; i++) {
    let currentPhrase = words.slice(i, i + phraseLength).join(" ");

    if(!phraseCounts[currentPhrase]) {
      phraseCounts[currentPhrase] = 1;
      firstIndexMap[currentPhrase] = i;
    }

    else {
      phraseCounts[currentPhrase]++;
    }

    if (phraseCounts[currentPhrase] === 2) {
      indexArr.push(firstIndexMap[currentPhrase]);
      indexArr.push(i);
    }
  }
  return indexArr.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  let array = [];
  if (texts.length === 0) {
    return array;
  }

  for (let i = 0; i < texts.length; i++) {
    texts[i] = {
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    }
    array.push(texts[i]);
  }
  return array
}