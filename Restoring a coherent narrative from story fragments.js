const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      newArray.push(arr[i]);
    }
  }
  if (arr.length !== newArray.length) {
    console.log("[COMPACTED] Undefined elements have been removed from the array.");
  }
  return newArray;
}

let compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arr) {
  let sortArray = [...arr];

  for (let i = 0; i < sortArray.length; i++) {
    for (let j = 0; j < sortArray.length - 1 - i; j++) {
      if (sortArray[j].id > sortArray[j + 1].id) {
        let temp = sortArray[j];
        sortArray[j] = sortArray[j + 1];
        sortArray[j + 1] = temp;
      }
    }
  }

  return sortArray;
}

let sortedFragments = sortFragments(compactedShuffledFragments)

function dedupeFragments(arr) {
  let newArray = [...arr];
  let arrayWithoutDuplicates = [];
  for (let i = 0; i < newArray.length; i++) {
    let hasId = arrayWithoutDuplicates.some(element => element.id === newArray[i].id);
    if (hasId) {
      console.log("[DEDUPED] This array contained a duplicate.");
      continue;
    }
    else {
      arrayWithoutDuplicates.push(newArray[i]);
    }
  }
  return arrayWithoutDuplicates;
}

let dedupedFragments = dedupeFragments(sortedFragments)

function fillMissingFragments (arr) {
  let arrCopy = [...arr];
  let newArray = [];
  let maxId = arrCopy[arrCopy.length - 1].id;

  for (let i = 1; i <= maxId; i++) {
    let foundElement = arr.find(element => element.id === i);
    if (foundElement) {
      newArray.push(foundElement);
    }
    else {
      newArray.push({ id: i, text: "[...]" });
      console.log("[FILLED] The missing fragment has been replaced.");
    }
  }
  return newArray;
}

console.log(fillMissingFragments([{ id: 1, text: "a" }, { id: 3, text: "c" }]))

let filledFragments = fillMissingFragments(sortedFragments)

function assembleStory (arr) {  

  return arr.map(fragment => fragment.text).join("\n");
}

console.log(assembleStory(filledFragments))