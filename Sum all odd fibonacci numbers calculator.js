function  sumFibs (num) {

  let firstNum = 1;
  let secondNum = 1;
  let nextNum = 0;
  let sum = 2;

  for (let i = 1; i < num; i++) {

        nextNum = firstNum + secondNum;

        if (nextNum <= num) {
          firstNum = secondNum;
          secondNum = nextNum;

          if (nextNum % 2 !== 0) {
          sum += nextNum;
          }

          else {
            continue;
          }
          
        }
        else {
          continue;
        }

    }
  return sum;
}

console.log(sumFibs(1000))