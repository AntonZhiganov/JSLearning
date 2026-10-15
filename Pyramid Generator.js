function pyramid (char, num, trueOrFalse) {
  const rows = [];
  for (let i = 1; i <= num; i++) {

    let spacesCount = num - i;
    let charCount = 2 * i - 1;
    let row = " ".repeat(spacesCount) + char.repeat(charCount);
    rows.push(row);
  }
  if (trueOrFalse) {
    rows.reverse();
  }
  return "\n" + rows.join("\n") + "\n"
}

console.log(pyramid("e", 4, false))