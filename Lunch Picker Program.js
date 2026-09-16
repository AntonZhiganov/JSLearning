let lunches = [];
function addLunchToEnd(arr, row) {  

  arr.push(row);
  console.log(row + " added to the end of the lunch menu.");
  return arr;

} 

function addLunchToStart(arr, row) {

  arr.unshift(row);
  console.log(row + " added to the start of the lunch menu.");
  return arr;

}

function removeLastLunch(arr) {

  let lastItem = arr.pop();
  if (arr.length !== 0) {
    console.log(lastItem + " removed from the end of the lunch menu.");
  }
  else {
    console.log("No lunches to remove.");
  }
  return arr;

}

function removeFirstLunch(arr) {

 let firstItem = arr.shift();
 if (arr.length !== 0) {
  console.log(firstItem + " removed from the start of the lunch menu.")
 }
 else {
  console.log("No lunches to remove.")
 }
  return arr;
}

function getRandomLunch(arr) {

 let numberOfItems = arr.length;
 if (numberOfItems !== 0) {
  let randomNum = Math.floor(Math.random() * numberOfItems);
  let randomElement = arr[randomNum];
  console.log("Randomly selected lunch: " + randomElement);
 }

 else {
  console.log("No lunches available.");
 }

 return arr;

 } 
 
function showLunchMenu(arr) {
  let strItems = "";
  if (arr.length !== 0) {
    strItems = arr.join(", ")
    console.log("Menu items: " + strItems);
  }

  else {
    console.log("The menu is empty.");
  }
  return arr;
}
