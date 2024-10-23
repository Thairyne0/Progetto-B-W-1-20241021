//variabili con il numero di risposte corrette ed errate
let correctAnswers = 8;
let wrongAnswers = 3;
let questionNumbers = correctAnswers + wrongAnswers;

//percentuali delle risposte
let correctPercentage = (correctAnswers / questionNumbers) * 100;
let wrongPercentage = (wrongAnswers / questionNumbers) * 100;

//percenutali arrotondate a sole due cifre decimali
let roundedCorrectPercentage = correctPercentage.toFixed(2);
let roundedWrongPercentage = wrongPercentage.toFixed(2);

//riferimento per il button del doc HTML
const rateUs = document.getElementById("rate-us");

//riferimento per h3 con la percentuale di risposte corrette
const corrAnsPerc = document.getElementById("correct-percentage");
corrAnsPerc.innerHTML = `
  <h3>${roundedCorrectPercentage}</h3>
`;
//riferimento per h3 con la percentuale di risposte errate
const wrongAnsPerc = document.getElementById("wrong-percentage");
wrongAnsPerc.innerHTML = `
  <h3>${roundedWrongPercentage}</h3>
`;

//riferimenti per <p></p> con il numero di risposte corrette ed errate rispetto al totale
const numCorrectAns = document.getElementById("correct-stats");
const numWrongAns = document.getElementById("wrong-stats");

numCorrectAns.innerHTML = `
  <p>${correctAnswers}/${questionNumbers} questions</p>
`;
numWrongAns.innerHTML = `
  <p>${wrongAnswers}/${questionNumbers} questions</p>
`;

const text1 = correctPercentage >= 60 ? "Congratulations!" : "Sorry!";
const text2 =
  correctPercentage >= 60 ? "You passed the exam" : "Try later again!";
const text3 = correctPercentage >= 60 ? `We'll send you the certificate` : ``;
const text4 = correctPercentage >= 60 ? `in few minutes.` : ``;
const text5 = correctPercentage >= 60 ? `Check your email(including` : ``;
const text6 = correctPercentage >= 60 ? `promotions/spam folder)` : ``;

//riferimento al tag canvas tramite il suo ID e selezioine del contesto in cui verrà disegnato il grafico
let ctx = document.getElementById("myChart").getContext("2d");

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Imposta lo stile del testo
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "bold 20px Outfit"; // Modifica il font a piacere
    ctx.fillStyle = "#fff"; // Colore del testo

    // Inserisci il testo che vuoi al centro
    ctx.fillText(text1, centerX, centerY - 80); // -80 sposta il testo verso l'alto rispetto al centro del 'buco' del grafico

    //seconda riga di testo
    ctx.fillStyle = "#00FFFF";
    ctx.fillText(text2, centerX, centerY - 60);

    //terza riga di testo
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 14px Inter";
    ctx.fillText(text3, centerX, centerY); // questo dovrebbe essre esattamente al centro del 'buco' del grafico

    //quarta riga di testo
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 14px Inter";
    ctx.fillText(text4, centerX, centerY + 20); // +20 sposta il testo verso il basso rispetto al centro del 'buco' del grafico

    //quinta riga di testo
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 14px Inter";
    ctx.fillText(text5, centerX, centerY + 40);

    //sesta riga di testo
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal 14px Inter";
    ctx.fillText(text6, centerX, centerY + 60);

    ctx.restore();
  },
};

// Registra il plugin
Chart.register(centerTextPlugin);

//disegno del grafico 'a ciambella'
let myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Wrong", "Correct"],
    datasets: [
      {
        label: "Quiz Results",
        data: [
          (wrongAnswers / questionNumbers) * 100,
          (correctAnswers / questionNumbers) * 100,
        ],
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true, // dimensioni del grafico si adattano a quelle del contenitore
    maintainAspectRatio: false,
    cutout: "70%", // cambia il raggio del 'buco' del grafico. In questo modo posso restringere lo spessore delle sezioni ceh mi indicano le percentuali delle risposte corrette e sbagliate
    plugins: {
      legend: {
        display: false, // toglie la legenda dei colori posizioinata di default in cima al doughnut chart
      },
      tooltip: {
        enabled: true, // passando il mouse sulle sezioni del grafico apre un popup con informazioni sulle percentuali di risposte
      },
    },
  },
});

// //effetti sul button 'RATE US'

rateUs.addEventListener("mouseenter", function () {
  rateUs.style.cursor = "pointer";
  rateUs.style.backgroundColor = "#00FFFF";
  rateUs.style.border = "none";
  rateUs.style.color = "black";
  rateUs.style.boxShadow = "0px 0px 30px 20px rgba(0,255,255,0.58)";
});

rateUs.addEventListener("mouseleave", function () {
  rateUs.style.cursor = "none";
  rateUs.style.backgroundColor = "transparent";
  rateUs.style.border = "2px solid white";
  rateUs.style.color = "white";
  rateUs.style.boxShadow = "none";
});

rateUs.addEventListener("click", function () {
  location.href = "../HTML/reviewPage.html";
});
