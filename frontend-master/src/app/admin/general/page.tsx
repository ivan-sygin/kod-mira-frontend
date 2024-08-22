'use client'
import { primaryColor } from '@/colors/colors'
import { Box } from '@mui/material'
import { LineChart } from '../../../charts/lineChart'
import { Charts } from '@/components/component/component'

export default function GeneralPreview() {
  const chartData = {
    labels: ['10', '14', '18', '22', '26'],
    values: [10, 20, 5, 40, 23]
  }
  return (
    <Box width={'100%'} sx={{ p: 1 }}>
      {/* <Box width={'100%'} height={200} bgcolor={'white'}>
        <Box
          width={300}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          bgcolor={'white'}
          boxShadow={'rgba(100, 100, 111, 0.2) 1px 7px 7px 1px;'}
          borderRadius={2}
          paddingX={2}
          paddingTop={2}
        >
          <Box fontWeight={700} fontSize={20} width={'100%'}>
            График фигни
          </Box>
          <Box width={250} paddingTop={2}>
            <LineChart data={chartData}></LineChart>
          </Box>
        </Box>
      </Box> */}
      <Charts />
    </Box>
  )
}
