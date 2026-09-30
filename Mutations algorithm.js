function mutation (array) {

let [str1, str2] = array;

let lowerStr1 = str1.toLowerCase();
let lowerStr2 = str2.toLowerCase();
let countArr2 = str2.length;
let index = 0;
let trueOrFalse;

while (index < countArr2) {

  if(lowerStr1.includes(lowerStr2[index])) {
    trueOrFalse = true;
    index++;
  }

  else {
    trueOrFalse = false;
    break;
  }
}

return trueOrFalse;

}

console.log(mutation(["hello", "a"]))