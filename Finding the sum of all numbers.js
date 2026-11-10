function sumAll ([n, m]) {

  let lowerNumber;
  let highestNumber;
  let sum = 0;

  if (n < m) {
    lowerNumber = n;
    highestNumber = m;
  }
  else {
    lowerNumber = m;
    highestNumber = n;
  }

  for (let i = lowerNumber; i <= highestNumber; i++ ) {
    sum += i;
  }
  return sum;
}