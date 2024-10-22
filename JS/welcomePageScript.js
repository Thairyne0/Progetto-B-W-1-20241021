let numeroDomande = 0;

let difficoltaDomande = "";

const difficultyButton = document.getElementsByClassName("drop-button")[0];

const questionNumberButton = document.getElementsByClassName("drop-button2")[0];

//funzione cambio pagina

const changePageFunction = function () {
  if (document.getElementById("checkbox").checked === true) {
    if (difficultyButton.textContent === "CHOOSE THE DIFFICULTY") {
      alert("Scegliere la difficoltá");
    } else {
      if (questionNumberButton.textContent === "CHOOSE HOW MANY QUESTIONS") {
        alert("Scegliere il numero di domande");
      } else {
        console.log("sono finish");
        location.href = "../HTML/quizPage.html";
      }
    }
  } else if (document.getElementById("checkbox").checked === false) {
    alert("Spuntare prima la checkbox");
  }
};

const variabile = document.getElementById("next-proceed-button");

variabile.addEventListener("click", changePageFunction);

const difficultyDropDownOne =
  document.getElementsByClassName("difficulty-button")[0];
const difficultyDropDownTwo =
  document.getElementsByClassName("difficulty-button")[1];
const difficultyDropDownThree =
  document.getElementsByClassName("difficulty-button")[2];

// console.log(dropDownOne.textContent);

difficultyDropDownOne.addEventListener("click", function () {
  difficultyButton.textContent = difficultyDropDownOne.textContent;
});

difficultyDropDownTwo.addEventListener("click", function () {
  difficultyButton.textContent = difficultyDropDownTwo.textContent;
});

difficultyDropDownThree.addEventListener("click", function () {
  difficultyButton.textContent = difficultyDropDownThree.textContent;
});

const numberQuestioOne = document.getElementsByClassName(
  "question-number-button"
)[0];
const numberQuestioTwo = document.getElementsByClassName(
  "question-number-button"
)[1];
const numberQuestioThree = document.getElementsByClassName(
  "question-number-button"
)[2];

numberQuestioOne.addEventListener("click", function () {
  questionNumberButton.textContent = numberQuestioOne.textContent;
});
numberQuestioTwo.addEventListener("click", function () {
  questionNumberButton.textContent = numberQuestioTwo.textContent;
});
numberQuestioThree.addEventListener("click", function () {
  questionNumberButton.textContent = numberQuestioThree.textContent;
});
