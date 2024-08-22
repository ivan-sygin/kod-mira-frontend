import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'

const DoughnutChart = () => {
  const data = {
    labels: ['Frontend', 'Backend', 'DevOPS'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: false,
        text: 'Doughnut Chart'
      }
    },
    maintainAspectRatio: false
  }

  return <Doughnut data={data} options={options} />
}

export default DoughnutChart
