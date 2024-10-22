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
