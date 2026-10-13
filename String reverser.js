function reverseString (str) {
  let charArray = str.split("");
  charArray.reverse();
  let correctStr = charArray.join("");
  return correctStr;
}

console.log(reverseString ("hello"));