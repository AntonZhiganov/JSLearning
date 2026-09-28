function repeatStringNumTimes(str, num){
  let output = "";
  if (num <= 0) {
    return ""
  }
  else {
    for (let counter = 0; counter < num; counter++){
      output += str;
    } 
    return output;
  }
}

console.log(repeatStringNumTimes("*", 3))