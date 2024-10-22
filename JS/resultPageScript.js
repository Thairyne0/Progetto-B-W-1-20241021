//variabili con il numero di risposte corrette ed errate
let correctAnswers = 6
let wrongAnswers = 4
let questionNumbers = correctAnswers + wrongAnswers
let correctPercentage = (correctAnswers / questionNumbers) * 100
let wrongPercentage = (wrongAnswers / questionNumbers) * 100
let roundedCorrectPercentage = correctPercentage.toFixed(0)
let roundedWrongPercentage = wrongPercentage.toFixed(0)

//riferimento per il button del doc HTML
const rateUs = document.getElementById('rate-us')

//riferimento per h3 con la percentuale di risposte corrette
const corrAnsPerc = document.getElementById('correct-percentage')
corrAnsPerc.innerHTML = `
  <h3>${roundedCorrectPercentage}</h3>
`
//riferimento per h3 con la percentuale di risposte errate
const wrongAnsPerc = document.getElementById('wrong-percentage')
wrongAnsPerc.innerHTML = `
  <h3>${roundedWrongPercentage}</h3>
`

//riferimenti per <p></p> con il numero di risposte corrette ed errate rispetto al totale
const numCorrectAns = document.getElementById('correct-stats')
const numWrongAns = document.getElementById('wrong-stats')

numCorrectAns.innerHTML = `
  <p>${correctAnswers}/${questionNumbers} questions</p>
`
numWrongAns.innerHTML = `
  <p>${wrongAnswers}/${questionNumbers} questions</p>
`

const text1 = correctPercentage >= 60 ? 'Congratulations!' : 'Sorry!'
const text2 = correctPercentage >= 60 ? 'Exam passed' : 'Try later!'

//riferimento al tag canvas tramite il suo ID
let ctx = document.getElementById('myChart').getContext('2d')

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const ctx = chart.ctx
    const width = chart.width
    const height = chart.height
    const centerX = width / 2
    const centerY = height / 2

    // Imposta lo stile del testo
    ctx.save()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.font = 'bold 16px Arial' // Modifica il font a piacere
    ctx.fillStyle = '#fff' // Colore del testo

    // Inserisci il testo che vuoi al centro
    ctx.fillText(text1, centerX, centerY - 100)

    //seconda riga di testo
    ctx.fillStyle = '#00FFFF'
    ctx.fillText(text2, centerX, centerY - 80)
    ctx.restore()
  },
}

// Registra il plugin
Chart.register(centerTextPlugin)

//disegno del grafico 'a ciambella'
let myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Wrong', 'Correct'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [
          (wrongAnswers / questionNumbers) * 100,
          (correctAnswers / questionNumbers) * 100,
        ],
        backgroundColor: ['#C2128D', '#00FFFF'],
        borderWidth: 0,
      },
    ],
  },
  options: {
    events: ['mousemove'],
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  },
})

// //effetti sul button 'RATE US'

rateUs.addEventListener('mouseenter', function () {
  rateUs.style.cursor = 'pointer'
  rateUs.style.backgroundColor = '#00FFFF'
  rateUs.style.border = 'none'
  rateUs.style.color = 'black'
  rateUs.style.boxShadow = '0px 0px 30px 20px rgba(0,255,255,0.58)'
})

rateUs.addEventListener('mouseleave', function () {
  rateUs.style.cursor = 'none'
  rateUs.style.backgroundColor = 'transparent'
  rateUs.style.border = '2px solid white'
  rateUs.style.color = 'white'
  rateUs.style.boxShadow = 'none'
})
