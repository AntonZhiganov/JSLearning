let num = 5;

function factorialCalculator(userNum) {

  let result = 1;

  for(let counter = 0; counter <= userNum; counter++) {

    if(counter !== 0) {
      result = result * counter;
    }

  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`

console.log(resultMsg);