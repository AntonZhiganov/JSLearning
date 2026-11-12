function convertHTML (string) {

  let userString = string.split('');
  let newString = userString;
  for (let i = 0; i < userString.length; i++) {
    switch (userString[i]) {

      case "&":
      newString.splice(i, 1, "&", "a", "m", "p", ";");
      continue;

      case "<":
      newString.splice(i, 1, "&", "l", "t", ";");
      continue;

      case ">":
      newString.splice(i, 1, "&", "g", "t", ";");
      continue;

      case `"`:
      newString.splice(i, 1, "&", "q","u", "o", "t", ";");
      continue;

      case `'`:
      newString.splice(i, 1, "&", "a", "p", "o", "s", ";");
      continue;
    }
  }
  return newString.join('');
}

console.log(convertHTML('Stuff in "quotation marks"'))