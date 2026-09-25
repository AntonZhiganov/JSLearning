let questions = [{
  category: "famous people",
  question: "Who was the world's first dollar billionaire?",
  choices: ["John D. Rockefeller", "Friedrich Merz", "Volodymyr Zelenskyy"],
  answer: "John D. Rockefeller"
},
{
  category: "animals",
  question: "Which of these animals lives in German forests?",
  choices: ["polar bear", "antelope", "wolf"],
  answer: "wolf"
},
{
  category: "history",
  question: " In what year did the USSR and Germany start World War II?",
  choices: ["1938", "1941", "1939"],
  answer: "1939"
},
{
  category: "automobiles",
  question: "Which car brand is German?",
  choices: ["Porsche", "Ford", "Mitsubishi"],
  answer: "Porsche"
},
{
  category: "countries",
  question: "Where is Ukraine located?",
  choices: ["in Europe", "in Africa", " in Asia"],
  answer: "in Europe"
},
];

function getRandomQuestion(questionsArray){
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex]
}

function getRandomComputerChoice(choicesArray){
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  
  return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
  let text;
  if (computerChoice === questionObj.answer) {
    text = "The computer's choice is correct!";
  }
  else {
    text = `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`
  }
  return text;

}
