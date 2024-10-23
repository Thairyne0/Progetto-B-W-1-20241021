const stelle = document.getElementsByClassName("star");

const stelleArray = Array.from(stelle); // Converte la HTMLCollection in un array

stelleArray.forEach(function (star, index) {
  star.addEventListener("click", function () {
    for (let i = 0; i <= 9; i++) {
      stelleArray[i].classList.remove("starClick");
      stelleArray[i].classList.add("star");
    }
    for (let i = 0; i <= index; i++) {
      stelleArray[i].classList.remove("star");
      stelleArray[i].classList.add("starClick");
    }
  });
});

document.getElementById("quiz-button").addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "../HTML/welcomePage.html";
});

document.getElementById("info-button").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Informazioni");
  location.href =
    "https://gattissimi.com/wp-content/uploads/2016/10/2d2a041ccf81c1ea9ffd255c70a4f024.jpg";
});
