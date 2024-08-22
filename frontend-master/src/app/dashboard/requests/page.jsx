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
import { Box, MenuItem, Select } from '@mui/material'
import { Resume } from '@/classes/resume'
import { useEffect, useState } from 'react'
import { MainApi } from '@/api/main-api/methods'
import { useRouter } from 'next/navigation'

let listCompets = [
  'ReactJS',
  'VueJS',
  'Angular',
  'Python',
  'FastAPI',
  'Java',
  'КОМПАС3D',
  'PHP',
  'C#'
]
let listSoftSkills = [
  'Не совпадения',
  'Честный',
  'Отсутствие опыта',
  'Непрерывная работа',
  'Пропуски в истории работы',
  'Верность',
  'В погоне за деньгами',
  'Маленький стек',
  'Обширный стек',
  'Планеровщик'
]

export default function MainMenu() {
  const [allComps, setAllComps] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    MainApi.getAllResumes().then((val) => setData(val))
  }, [])

  return (
    <Box flex={1}>
      <Box
        className='flex flex-col'
        paddingX={4}
        paddingBottom={3}
        height={'100%'}
      >
        <HeaderMain></HeaderMain>
        <Box className='flex flex-row' flex={1} gap={2}>
          <Box className='flex flex-col' flex={75}>
            <LeftSideDivs allComps={allComps} data={data} />
          </Box>
          <Box className='flex flex-col' flex={25}>
            <RightSideDivs setAllComps={setAllComps} allComps={allComps} />
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

function LeftSideDivs({ allComps, data }) {
  let countResumes = '2 134'
  // console.log(allComps)
  function EmployerBlock({ resume, color, percent }) {
    let avatarSize = 50
    const router = useRouter()
    return (
      <Box
        onClick={() => {
          router.push('/dashboard/profile/' + resume.id)
        }}
        flex={1}
        width={'100%'}
        minHeight={80}
        paddingX={2}
        className='bg-gray-50 flex items-center'
        borderRadius={2}
        sx={{ cursor: 'pointer' }}
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
            src={resume.photo}
            sx={{ objectFit: 'cover' }}
          ></Box>
        </Box>

        <Box
          className='flex flex-row justify-between items-center'
          paddingLeft={2}
          flex={1}
        >
          <Box flex={1}>{resume.name}</Box>
          <Box>
            <Box
              bgcolor={color}
              paddingX={1}
              paddingY={0.5}
              borderRadius={100}
              fontSize={10}
              color={'white'}
            >
              {resume.type}
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
              {percent}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  function EmployersBlocks() {
    let countFilters = allComps.length
    let countCompared = 0
    let employers = data.map((elem) => {
      return new Resume(
        elem.id,
        elem.firstName + ' ' + elem.secondName,
        'Frontend-программист',
        elem.stacks,
        'http://enotgpt.ru/api/file-server/photos/8e6492a3a79ecebefbacc2b547e8bead81c1da76b48e1dd9f9baec8fa671ae4d.png',
        elem.skills
      )
    })
    console.log(employers)
    return (
      <Box
        width={'100%'}
        bgcolor={'white'}
        height={'100%'}
        maxHeight={'80vh'}
        borderRadius={2}
        className='flex flex-col'
        color={'black'}
        position={'relative'}
        overflow={'auto'}
      >
        <Box paddingY={2} paddingX={2} overflow={'auto'}>
          <Box overflow={'auto'} sx={{ scrollbarWidth: 'thin' }}>
            <Box className='flex flex-col' gap={1} overflow={'auto'}>
              {countFilters != 0
                ? employers
                    .sort((a, b) => {
                      let countCompared1 = 0
                      allComps.forEach((element) => {
                        if (
                          a.stack.includes(element) ||
                          a.skills.forEach((elementer) =>
                            elementer.includes(element)
                          )
                        ) {
                          countCompared1 += 1
                        }
                      })
                      let countCompared2 = 0
                      allComps.forEach((element) => {
                        if (
                          b.stack.includes(element) ||
                          b.skills.forEach((elementer) =>
                            elementer.includes(element)
                          )
                        ) {
                          countCompared2 += 1
                        }
                      })
                      if (countCompared1 > countCompared2) return -1
                      return 1
                    })
                    .map((val, index) => {
                      countCompared = 0
                      allComps.forEach((element) => {
                        if (
                          val.stack.includes(element) ||
                          val.skills.forEach((elementer) => {
                            if (elementer.includes(element)) countCompared += 1
                          })
                        ) {
                          countCompared += 1
                          console.log(countCompared)
                        }
                      })
                      return (
                        <EmployerBlock
                          key={index}
                          resume={val}
                          color={'red'}
                          percent={
                            Math.floor((countCompared / countFilters) * 100) +
                            '%'
                          }
                        />
                      )
                    })
                : employers.map((val, index) => {
                    return (
                      <EmployerBlock
                        key={index}
                        resume={val}
                        color={'red'}
                        percent={''}
                      />
                    )
                  })}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  return (
    <Box width={'100%'} height={'100%'} borderRadius={2} overflow={'auto'}>
      <EmployersBlocks />
    </Box>
  )
}

function RightSideDivs({ setAllComps, allComps }) {
  const [comps, setComps] = useState([])
  const [softSkills, setSoftSkills] = useState([])
  const [listTemplates, setListTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState('')

  const handleChange = (event) => {
    const {
      target: { value }
    } = event
    setComps(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    setSelectedTemplate('')
    console.log(comps)
  }

  const handleChangeSoft = (event) => {
    const {
      target: { value }
    } = event
    setSoftSkills(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    setSelectedTemplate('')
    console.log(softSkills)
  }

  const handleChangeTemplate = (event) => {
    const {
      target: { value }
    } = event
    if (value == '') {
      setComps([])
      setSoftSkills([])
      setSelectedTemplate('')
    } else {
      setSelectedTemplate(value)
      MainApi.getSkillsFromTemplate().then((val) =>
        setComps(
          // On autofill we get a stringified value.
          typeof val === 'string' ? val.split(',') : val
        )
      )
      MainApi.getStackFromTemplate().then((val) =>
        setSoftSkills(
          // On autofill we get a stringified value.
          typeof val === 'string' ? val.split(',') : val
        )
      )
    }
  }

  useEffect(() => {
    MainApi.getMyTemplates().then((val) => setListTemplates(val))
  }, [])

  useEffect(() => {
    setAllComps(comps.concat(softSkills))
  }, [comps, softSkills])

  return (
    <Box width={'250px'} height={'100%'} bgcolor={'white'} borderRadius={2}>
      <Box>
        <Box>Компетенции</Box>
        <Select
          value={comps}
          onChange={handleChange}
          multiple
          fullWidth
          renderValue={(selected) => selected.join(', ')}
        >
          {listCompets.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                <Box>{val}</Box>
              </MenuItem>
            )
          })}
        </Select>
      </Box>
      <Box>
        <Box>Софт-скиллы</Box>
        <Select
          value={softSkills}
          onChange={handleChangeSoft}
          multiple
          fullWidth
          renderValue={(selected) => selected.join(', ')}
        >
          {listSoftSkills.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                <Box>{val}</Box>
              </MenuItem>
            )
          })}
        </Select>
      </Box>
      <Box>
        <Box>Шаблоны</Box>
        <Select
          value={selectedTemplate}
          onChange={handleChangeTemplate}
          fullWidth
        >
          <MenuItem value=''>
            <em>Очистить</em>
          </MenuItem>
          {listTemplates.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                <Box>{val}</Box>
              </MenuItem>
            )
          })}
        </Select>
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
