function generatePassword (length) {
  let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";


  for(let i = 0; i < length; i++) {
  let randomNum = Math.floor(Math.random() * (symbols.length - 0) + 0);
  password += symbols[randomNum];
  }
return password;
}

let password = generatePassword(4);
console.log(`Generated password: ${password}`);
