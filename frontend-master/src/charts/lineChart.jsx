import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const LineChart = ({ data }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    const ctx = document.getElementById('line-chart').getContext('2d')
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'My Data',
            data: data.values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverRadius: 8
          }
        ]
      },
      options: {
        gridLines: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              display: false,
              color: '#fff',
              font: {
                size: 14
              }
            }
          },
          x: {
            grid: {
              display: false,
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#fff',
              font: {
                size: 14
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              color: '#fff',
              font: {
                size: 16
              }
            }
          }
        }
      }
    })
  }, [data])

  return (
    <div className='chart-container'>
      <canvas id='line-chart' />
    </div>
  )
}

export { LineChart }
