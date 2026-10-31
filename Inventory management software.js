let inventory = [];

function findProductIndex (name) {
  name = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (name === inventory[i].name) {
      return i;
    }
    else {
      continue;
    }
  }
  return -1;
}

function addProduct (object) {
  let isFound = false;
  object.name = object.name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if(object.name === inventory[i].name){
      inventory[i].quantity += object.quantity;
      console.log(`${object.name} quantity updated`);
      isFound = true;
    }
  }
  
  if (isFound === false) {
    inventory.push(object);
    console.log(`${object.name} added to inventory`);
  }
}

function removeProduct (name, quantity) {
  let isFound = false;
  name = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {

    if(name === inventory[i].name){
      if (inventory[i].quantity > quantity) {
        inventory[i].quantity -= quantity;
        console.log(`Remaining ${name} pieces: ${inventory[i].quantity}`)
        isFound = true;
        break;
      }
      else if (inventory[i].quantity < quantity) {
        console.log(`Not enough ${name} available, remaining pieces: ${inventory[i].quantity}`)
        isFound = true;
        break;
      }
      else {
        inventory.splice(i, 1);
        isFound = true;
        break;
      }
    }
  }
  if (isFound === false) {
      console.log(`${name} not found`);
    }
}