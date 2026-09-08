let email;
email = 'bogdanrobert@gmail.com';

function maskEmail (email) {

  let index = email.indexOf("@");
  let notMask1 = email.slice(0,1);
  let mask = email.slice(1, index-1);
  let notMask2 = email.slice(index-1); 
  let maskOn;
  let starCount = mask.length;
  maskOn = email.replace(mask, "*".repeat(starCount));

  return maskOn;
}
 console.log(maskEmail(email))