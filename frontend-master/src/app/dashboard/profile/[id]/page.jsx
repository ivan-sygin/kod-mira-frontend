'use client'
import { primaryColor, secondaryColor } from '@/colors/colors'
import { Box } from '@mui/material'
import { Grid } from 'react-loader-spinner'
import DoughnutChart from '@/components/RadarChart'
import ToCsvButton from '@/components/ToCsvButton'
import { MainApi } from '../../../../api/main-api/methods'
import { useEffect, useState } from 'react'

export default function ResumePage({ params: { id } }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    MainApi.getResumeById(id).then((res) => setData(res['data']['resume']))
    setLoading(false)
  }, [])
  function Characteristics({ text, type = '' }) {
    let colorDict = {
      '': primaryColor,
      bad: 'red',
      middle: 'orange',
      good: primaryColor
    }
    return (
      <Box
        bgcolor={colorDict[type]}
        paddingX={2}
        paddingY={0.5}
        color={'white'}
        borderRadius={200}
      >
        {text}
      </Box>
    )
  }
  function sliceText(text = '') {
    var sliced = text.slice(0, 15)
    if (sliced.length < text.length) {
      sliced += '...'
    }

    return sliced
  }
  function DotOpit({ nameCompany, date, job }) {
    return (
      <Box
        className='flex flex-col justify-center items-center'
        sx={{ animationName: 'scaleAnim', animationDuration: '1s' }}
      >
        <Box
          width={20}
          height={20}
          bgcolor={primaryColor}
          borderRadius={100}
          className='flex justify-center items-center'
        >
          <Box
            width={10}
            height={10}
            bgcolor={'white'}
            borderRadius={100}
          ></Box>
        </Box>
        <Box
          fontWeight={700}
          maxHeight={20}
          textOverflow={'ellipsis'}
          sx={{ maxLines: 2 }}
        >
          {sliceText(nameCompany)}
        </Box>
        <Box fontWeight={500} color={'gray'}>
          {job}
        </Box>
        <Box fontWeight={300} color={'gray'}>
          {date}
        </Box>
      </Box>
    )
  }
  if (!data)
    return (
      <Box
        className='flex justify-center items-center'
        width={'100%'}
        height={'100%'}
      >
        <Grid
          visible={true}
          height='80'
          width='80'
          color={primaryColor}
          ariaLabel='grid-loading'
          radius='12.5'
          wrapperStyle={{}}
          wrapperClass='grid-wrapper'
        />
      </Box>
    )
  else {
    let fio = data['first_name'] + ' ' + data['last_name']
    let email = data['email'] != '' ? data['email'] : '-'
    let birthDate = data['birth_date'] != '' ? data['birth_date'] : '-'
    let phone = data['phone_number'] != '' ? data['phone_number'] : '-'
    let skills = data['skills'] != [] ? data['skills'] : []
    let stack = data['stacks'] != [] ? data['stacks'] : []
    let position = data['position'] != '' ? data['position'] : '-'
    let experience = data['experience'] != '' ? data['experience'] : '-'
    let companies = data['companies'] != [] ? data['companies'] : '-'
    let degree = data['degree'] != [] ? data['degree'] : 'Junior'
    let age = data['age'] != [] ? data['age'] : '-'
    return (
      <Box flex={1} height={'100%'} paddingX={4}>
        <Box className='flex flex-row' height={'300px'} gap={4} marginTop={4}>
          <Box
            width={'60%'}
            height={'100%'}
            bgcolor={'white'}
            borderRadius={5}
            className='flex flex-row'
            sx={{
              animationName: 'scaleAnim',
              animationDuration: '1s',
              '@keyframes scaleAnim': {
                from: {
                  opacity: '30%',
                  transform: 'scale(0.7)'
                },

                to: {
                  opacity: '100%',
                  transform: 'scale(1)'
                }
              }
            }}
          >
            <Box
              width={'40%'}
              paddingTop={3}
              className='flex flex-col items-center'
            >
              <Box
                width={100}
                height={100}
                borderRadius={100}
                overflow={'hidden'}
              >
                <Box
                  component={'img'}
                  src='http://enotgpt.ru/api/file-server/photos/8e6492a3a79ecebefbacc2b547e8bead81c1da76b48e1dd9f9baec8fa671ae4d.png'
                ></Box>
              </Box>
              <Box paddingTop={2} fontWeight={700} fontSize={24}>
                {fio}
              </Box>
              <Box
                paddingTop={0}
                fontWeight={500}
                fontSize={16}
                className=' text-gray-400'
              >
                {email}
              </Box>
              <Box width={'100%'} height={50} paddingX={2} marginTop={3}>
                <Box
                  bgcolor={primaryColor}
                  width={'100%'}
                  height={50}
                  borderRadius={4}
                  fontWeight={700}
                  className={'text-white flex justify-center items-center'}
                >
                  Написать
                </Box>
              </Box>
            </Box>
            <Box width={'60%'} className='flex flex-row'>
              <Box
                flex={1}
                className='flex flex-col items-center justify-between'
                gap={2}
                paddingTop={2}
                paddingBottom={4}
              >
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Дата рождения
                  </Box>
                  <Box paddingY={1}>{birthDate}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Должность
                  </Box>
                  <Box paddingY={1}>{position}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Стаж
                  </Box>
                  <Box paddingY={1}>{experience}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
              </Box>
              <Box
                flex={1}
                className='flex flex-col items-center justify-between'
                gap={2}
                paddingTop={2}
                paddingBottom={4}
              >
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Уровень
                  </Box>
                  <Box paddingY={1}>{degree}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Возраст
                  </Box>
                  <Box paddingY={1}>{age}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
                <Box className='flex flex-col' width={'80%'}>
                  <Box fontWeight={700} className='text-gray-400'>
                    Телефон
                  </Box>
                  <Box paddingY={1}>{phone}</Box>
                  <Box
                    height={1}
                    borderTop={1}
                    className='text-gray-200'
                    width={'100%'}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={'40%'}
            height={'100%'}
            bgcolor={'white'}
            borderRadius={5}
            padding={2}
            fontWeight={700}
            sx={{ animationName: 'scaleAnim', animationDuration: '1s' }}
          >
            <Box>Стек качеств</Box>
            <Box height={'90%'}>
              <DoughnutChart></DoughnutChart>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={2}
          height={330}
          width={'100%'}
          borderRadius={5}
          gap={2}
          className='flex flex-row justify-around items-center'
        >
          <Box
            flex={80}
            bgcolor={'white'}
            height={'100%'}
            borderRadius={4}
            sx={{ animationName: 'scaleAnim', animationDuration: '1s' }}
          >
            <Box
              className='flex flex-row justify-around'
              width={'100%'}
              gap={1}
              paddingTop={2}
              flexWrap={'wrap'}
            >
              {stack.map((e, ind) => {
                console.log(e)
                return (
                  <Characteristics
                    key={ind}
                    text={e['stack']}
                    color={primaryColor}
                  />
                )
              })}
            </Box>
            <Box
              width={'100%'}
              height={270}
              className='flex flex-row justify-around items-center'
              position={'relative'}
            >
              <Box
                width={'100%'}
                height={5}
                bgcolor={primaryColor}
                position={'absolute'}
                top={'100px'}
                sx={{
                  animationName: 'slideintext',
                  animationDuration: '1.5s',

                  '@keyframes slideintext': {
                    from: {
                      opacity: '30%',
                      width: '0%'
                    },

                    to: {
                      opacity: '100%',
                      width: '100%'
                    }
                  }
                }}
              ></Box>
              <Box
                className='flex flex-row-reverse justify-around items-center'
                position={'absolute'}
                width={'100%'}
                top={'93px'}
              >
                {companies.map((elem, ind) => {
                  return (
                    <DotOpit
                      key={ind}
                      nameCompany={elem['name']}
                      job={elem['start_date'] != '' ? elem['start_date'] : '-'}
                      date={elem['end_date'] != '' ? elem['end_date'] : '-'}
                    ></DotOpit>
                  )
                })}
              </Box>
            </Box>
          </Box>
          <Box
            flex={20}
            bgcolor={'white'}
            height={'100%'}
            borderRadius={4}
            padding={1}
            className='flex flex-row justify-around items-center'
            sx={{ animationName: 'scaleAnim', animationDuration: '1s' }}
          >
            <Box
              className='flex flex-row justify-around items-center'
              width={300}
              gap={1}
              flexWrap={'wrap'}
            >
              {skills
                .sort((a, b) => {
                  if (a['type'] == 'good' && b['type'] == 'bad') return -1
                  return 1
                })
                .map((elem, ind) => {
                  return (
                    <Characteristics
                      key={ind}
                      text={elem['name']}
                      type={elem['type']}
                    />
                  )
                })}
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={2}
          width={'100%'}
          borderRadius={5}
          className='flex flex-row justify-around items-center'
        >
          <ToCsvButton id={id} />
        </Box>
      </Box>
    )
  }
}
