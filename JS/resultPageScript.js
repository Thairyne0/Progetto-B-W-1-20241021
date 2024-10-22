let correctAnswers = 19
let wrongAnswers = 2
let questionNumbers = correctAnswers + wrongAnswers
let correctPercentage = (correctAnswers / totalAnswers) * 100

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
          (wrongAnswers / totalAnswers) * 100,
          (correctAnswers / totalAnswers) * 100,
        ],
        backgroundColor: ['#C2128D', '#00FFFF'],
        borderWidth: 0,
      },
    ],
  },
  options: {
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
