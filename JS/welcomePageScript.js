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
  // difficoltaDomande = difficultyDropDownOne.textContent;
  localStorage.setItem("difficoltaDomande", difficultyDropDownOne.textContent);
  console.log(difficoltaDomande);
});

difficultyDropDownTwo.addEventListener("click", function () {
  difficultyButton.textContent = difficultyDropDownTwo.textContent;
  // difficoltaDomande = difficultyDropDownTwo.textContent;
  localStorage.setItem("difficoltaDomande", difficultyDropDownTwo.textContent);
  console.log(difficoltaDomande);
});

difficultyDropDownThree.addEventListener("click", function () {
  difficultyButton.textContent = difficultyDropDownThree.textContent;
  // difficoltaDomande = difficultyDropDownThree.textContent;
  localStorage.setItem(
    "difficoltaDomande",
    difficultyDropDownThree.textContent
  );
  console.log(difficoltaDomande);
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
  localStorage.setItem("numeroDomande", parseInt(numberQuestioOne.textContent));
  console.log(numeroDomande);
});
numberQuestioTwo.addEventListener("click", function () {
  questionNumberButton.textContent = numberQuestioTwo.textContent;
  localStorage.setItem("numeroDomande", parseInt(numberQuestioTwo.textContent));
  console.log(numeroDomande);
});
numberQuestioThree.addEventListener("click", function () {
  questionNumberButton.textContent = numberQuestioThree.textContent;
  localStorage.setItem(
    "numeroDomande",
    parseInt(numberQuestioThree.textContent)
  );
  console.log(numeroDomande);
});
