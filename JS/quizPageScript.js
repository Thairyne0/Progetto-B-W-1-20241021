const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    answer: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
      "Central Processing Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    answer: ["Final", "Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    answer: [".svg", ".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    answer: [
      "Cascading Style Sheet",
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    answer: ["Nougat", "Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    answer: ["140", "120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    answer: ["Python", "C", "Jakarta", "Java"],
  },
];

let answerButtons = document.getElementsByClassName("risposta");

const arraybuttonsAnswer = Array.from(answerButtons);

let punteggioUtente = 0;

let randomNumber = 0;

let indice = 0;

let indiceRis = 0;

let stringa = "";

const answerFunction = function (e) {
  for (let i = 0; i < arraybuttonsAnswer.length; i++) {
    arraybuttonsAnswer[i].style.backgroundColor = "rgba(255, 255, 255, 0.164)";
  }
  console.log(e.target);
  e.preventDefault();
  console.log("ciao");
  let newAnswerButton = e.target;
  newAnswerButton.style.backgroundColor = "#C4008F";
  stringa = newAnswerButton.textContent;
};

const popolamentoDomande = function () {
  for (let i = 0; i < arraybuttonsAnswer.length; i++) {
    arraybuttonsAnswer[i].style.backgroundColor = "rgba(255, 255, 255, 0.164)";
  }

  //   const arrayDomandeAlreadyUscite = [0, 1, 2, 3, 4, 5, 6];
  //   randomNumber = Math.floor(Math.random() * 7);
  //   console.log(randomNumber);

  //   for (let i = 0; i < arrayDomandeAlreadyUscite.length; i++) {
  //     if (arrayDomandeAlreadyUscite[i] === randomNumber) {
  //       randomNumber = Math.floor(Math.random() * 7);
  //     } else {
  //       arrayDomandeAlreadyUscite.slice(i, 1);
  //       break;
  //     }
  //   }

  document.getElementById("domanda").innerText = questions[indice].question;
  let risposte = document.getElementsByClassName("risposta");

  const arrayRisposte = Array.from(risposte);

  for (let i = 0; i < arrayRisposte.length; i++) {
    arrayRisposte[i].innerText = questions[indice].answer[i];
  }

  console.log(stringa);
  console.log(questions[indiceRis].correct_answer);
  if (questions[indiceRis].correct_answer === stringa) {
    console.log("corretta");
    punteggioUtente++;
    indiceRis++;
  } else if (questions[indiceRis].incorrect_answers[0] === stringa) {
    console.log("sbagliata");
    indiceRis++;
  } else if (questions[indiceRis].incorrect_answers[1] === stringa) {
    console.log("sbagliata");
    indiceRis++;
  } else if (questions[indiceRis].incorrect_answers[2] === stringa) {
    console.log("sbagliata");
    indiceRis++;
  }

  indice++;
};

let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", popolamentoDomande);

for (let i = 0; i < arraybuttonsAnswer.length; i++) {
  arraybuttonsAnswer[i].addEventListener("click", answerFunction);
}

const hoverFunction = function (e) {
  button = e.target;
  button.style.backgroundColor = "#C4008F";
};

const outFunction = function (e) {
  button = e.target;
  button.style.backgroundColor = "#0C113B";
};

nextButton.addEventListener("mouseover", hoverFunction);
//non c'é assolutamente nessun bug qui TRANQUILLO
nextButton.addEventListener("mouseout", outFunction);

popolamentoDomande();
