'use client'
import { LineChart } from '@mui/x-charts/LineChart'
import {
  fourthColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Box } from '@mui/material'

export default function MainMenu() {
  return (
    <Box flex={1}>
      <Box className='flex flex-col' paddingX={4} height={'100%'}>
        <HeaderMain></HeaderMain>
        <Box className='flex flex-row' flex={1} gap={4}>
          <Box className='flex flex-col' flex={65}>
            <LeftSideDivs></LeftSideDivs>
          </Box>
          <Box className='flex flex-col' flex={35}>
            <RightSideDivs></RightSideDivs>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function HeaderMain() {
  let nameUser = 'Иван'
  let sizeFont = 21
  function AccountMain() {
    let sizeAcc = 40
    return (
      <Box
        width={sizeAcc}
        height={sizeAcc}
        borderRadius={100}
        overflow={'hidden'}
      >
        <Box
          width={'100%'}
          height={'100%'}
          component={'img'}
          src='http://enotgpt.ru/api/file-server/photos/59e57440748027e7206b17186d77dbef9a73014bf4050bf36964edfd0d1a6008.png'
        ></Box>
      </Box>
    )
  }
  return (
    <Box className='flex flex-row justify-between items-center' height={100}>
      <Box className='flex flex-row'>
        <Box
          fontWeight={700}
          fontSize={sizeFont}
          className='flex flex-col justify-center'
        >
          {'Здравствуйте, '}
        </Box>
        <Box
          fontWeight={700}
          fontSize={sizeFont}
          height={100}
          className='flex flex-col justify-center'
          color={primaryColor}
        >
          {nameUser + '!'}
        </Box>
      </Box>
      <Box className='flex flex-row items-center' gap={2}>
        <SearchOutlinedIcon></SearchOutlinedIcon>
        <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
        <AccountMain></AccountMain>
      </Box>
    </Box>
  )
}

function LeftSideDivs() {
  let countResumes = '2 134'
  function MainBlock() {
    return (
      <Box
        width={'100%'}
        bgcolor={primaryColor}
        height={200}
        borderRadius={5}
        className='flex flex-col'
        color={'white'}
        position={'relative'}
        overflow={'hidden'}
        sx={{ animationName: 'scaleAnim', animationDuration: '0.5s' }}
      >
        <Box position={'absolute'} height={200} width={250} right={0}>
          <Box
            sx={{ transform: 'scaleX(-1)' }}
            component={'img'}
            src='http://enotgpt.ru/api/file-server/photos/d9e9f2d6661a3097f35059d1aebde0e19a700df1d22c3c46a12ca3d1b00e3198.png'
          ></Box>
        </Box>
        <Box paddingY={3} paddingX={4}>
          <Box paddingRight={'250px'}>
            <Box fontWeight={900} fontSize={25}>
              {countResumes} резюме
            </Box>
            <Box height={15}></Box>
            <Box>
              Для обработки всех резюме перейдите на страницу со всеми резюме.
              Хорошего рабочего дня!
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  function EmployerBlock({ photo, name, type, stack, color }: any) {
    let avatarSize = 50

    return (
      <Box
        width={'100%'}
        height={80}
        paddingX={2}
        className='bg-gray-50 flex items-center'
        borderRadius={4}
      >
        <Box
          width={50}
          height={50}
          bgcolor={color}
          borderRadius={4}
          overflow={'hidden'}
        >
          <Box
            component={'img'}
            width={'100%'}
            height={'100%'}
            src={photo}
            sx={{ objectFit: 'cover' }}
          ></Box>
        </Box>

        <Box
          className='flex flex-row justify-between items-center'
          paddingLeft={2}
          flex={1}
        >
          <Box flex={1}>{name}</Box>
          <Box>
            <Box
              bgcolor={color}
              paddingX={1}
              paddingY={0.5}
              borderRadius={100}
              fontSize={10}
              color={'white'}
            >
              {type}
            </Box>
          </Box>
          <Box className='flex flex-row justify-end items-center' flex={1}>
            <Box width={5} height={5} bgcolor={color} borderRadius={10}></Box>
            <Box
              paddingX={1}
              paddingY={0.5}
              borderRadius={100}
              fontSize={14}
              color={'black'}
            >
              {stack}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  function EmployersBlocks() {
    return (
      <Box
        width={'100%'}
        bgcolor={'white'}
        height={355}
        borderRadius={5}
        className='flex flex-col'
        color={'black'}
        position={'relative'}
        overflow={'hidden'}
        sx={{ animationName: 'scaleAnim', animationDuration: '0.5s' }}
      >
        <Box position={'absolute'} height={200} width={250} right={0}></Box>
        <Box paddingY={3} paddingX={4}>
          <Box>
            <Box className='flex flex-row justify-between items-center'>
              <Box fontWeight={900} fontSize={25}>
                Избранные резюме
              </Box>
              <Box
                fontWeight={700}
                fontSize={14}
                border={1}
                borderRadius={10}
                paddingX={2}
                paddingY={0.5}
                color={primaryColor}
              >
                Ещё
              </Box>
            </Box>
            <Box height={15}></Box>
            <Box className='flex flex-col' gap={1}>
              <EmployerBlock
                name='Ivan Sygin'
                type={'Frontend-программист'}
                stack={'React'}
                photo={
                  'http://enotgpt.ru/api/file-server/photos/0bb82a321a0591be9c17b182c1e461c2091c5540f2bd857ebdf9d0be17cdd32c.png'
                }
                color={primaryColor}
              ></EmployerBlock>
              <EmployerBlock
                name='Leonid Sygin'
                type={'Менеджер'}
                stack={'PowerPoint'}
                photo={
                  'http://enotgpt.ru/api/file-server/photos/bb30e9eacf16377eeadd5f31d98fa71d1576a8f0bb7349bf997066f4cc17ed76.png'
                }
                color={thirdColor}
              ></EmployerBlock>
              <EmployerBlock
                name='Misha Vavilin'
                type={'Backend-программист'}
                stack={'FastAPI'}
                photo={
                  'http://enotgpt.ru/api/file-server/photos/c685eb38051bd6825b8c07bc8c303aed6ddd6b5e39d6c437b3f7a75c869b1563.png'
                }
                color={'red'}
              ></EmployerBlock>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  return (
    <Box width={'100%'} height={'100%'} borderRadius={5}>
      <MainBlock></MainBlock>
      <Box height={20}></Box>
      <EmployersBlocks></EmployersBlocks>
    </Box>
  )
}

function RightSideDivs() {
  const currentDay = new Date().getDate()
  const dayWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  const days = [
    [2700, 2800, 2900, 3000, 3100, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30]
  ]
  let i = 0
  let j = 0

  return (
    <Box className='flex flex-col'>
      <Box
        width={'100%'}
        height={250}
        bgcolor={'white'}
        borderRadius={'20px'}
        paddingY={1}
        paddingX={1}
        sx={{ animationName: 'scaleAnim', animationDuration: '0.5s' }}
      >
        <Box className='flex flex-col'>
          <Box className='flex flex-row'>
            {dayWeek.map((val) => {
              i += 1
              return (
                <Box
                  key={i}
                  flex={1}
                  className='flex justify-center items-center'
                  height={40}
                  fontWeight={700}
                >
                  {val}
                </Box>
              )
            })}
          </Box>
          {days.map((val) => {
            i += 1

            return (
              <Box className='flex flex-row' key={i}>
                {val.map((val) => {
                  let color = val >= 100 ? 'grey' : 'black'
                  if (val == currentDay) color = 'white'
                  j += 1
                  return (
                    <Box
                      key={j}
                      flex={1}
                      className='flex justify-center items-center'
                      height={40}
                      color={color}
                    >
                      <Box
                        className='flex justify-center items-center'
                        height={32}
                        width={32}
                        padding={0.5}
                        borderRadius={10}
                        bgcolor={val == currentDay ? primaryColor : 'white'}
                      >
                        {val >= 100 ? Math.floor(val / 100) : val}
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box height={20}></Box>
      <Box
        width={'100%'}
        height={305}
        bgcolor={'white'}
        borderRadius={'20px'}
        paddingY={1}
        paddingX={1}
        sx={{ animationName: 'scaleAnim', animationDuration: '0.5s' }}
      >
        <Box>
          <Chart></Chart>
        </Box>
      </Box>
    </Box>
  )
}

function Chart() {
  let data = [2, 5.5, 2, 8.5, 1.5, 5]
  return (
    <LineChart
      series={[
        {
          data: data
        }
      ]}
      height={300}
      leftAxis={null}
      bottomAxis={null}
    />
  )
}
