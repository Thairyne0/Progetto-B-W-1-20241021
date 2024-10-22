let numeroDomande = 0;

let difficoltaDomande = "";

//funzione cambio pagina

const changePageFunction = function (e) {
  e.preventDefault();
  console.log("sono finish");
  location.href = "../HTML/quizPage.html";
};

let variabile = document.getElementById("button");

variabile.addEventListener("click", changePageFunction);
