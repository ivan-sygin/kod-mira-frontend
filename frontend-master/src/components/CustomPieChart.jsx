'use client'
import { PieChart } from '@mui/x-charts/PieChart'

function CostumPieChart() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'frontend' },
            { id: 1, value: 15, label: 'backend' },
            { id: 2, value: 20, label: 'devops' }
          ]
        }
      ]}
      width={400}
      height={200}
    />
  )
}

export default CostumPieChart
