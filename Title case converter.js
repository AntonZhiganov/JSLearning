function titleCase (str) {
  let correctTitle = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      correctTitle += str[i].toUpperCase();
    }
    else if (str[i-1] === " ") {
      correctTitle += str[i].toUpperCase();
    }
    else if (str[i] === " ") {
      correctTitle += str[i]
    }
    else {
      correctTitle += str[i].toLowerCase();
    }
  }
  return correctTitle;
}


console.log(titleCase("I'm a little tea pot"))