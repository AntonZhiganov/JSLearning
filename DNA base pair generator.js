function pairElement (row) {
  let pairs = [];

  for (let i = 0; i < row.length; i++) {
    let pair = [];

    switch (row[i]) {

      case "A":
      pair = ["A", "T"];
      pairs.push(pair);
      break;

      case "T":
      pair = ["T", "A"];
      pairs.push(pair);
      break;

      case "C":
      pair = ["C", "G"];
      pairs.push(pair);
      break;

      case "G":
      pair = ["G", "C"];
      pairs.push(pair);
      break;
    }
  }
  return pairs;
}