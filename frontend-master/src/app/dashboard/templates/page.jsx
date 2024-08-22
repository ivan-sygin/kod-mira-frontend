'use client'
import { Box, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { photoStack } from '@/staticData/stack'
import { MainApi } from '@/api/main-api/methods'
import { primaryColor } from '@/colors/colors'
import { TextField } from '@mui/material'
import { Slider } from '@mui/material'
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined'
export default function TemplatesPage() {
  const [selected, setSelected] = useState('')
  const [competitions, setCompetitions] = useState([])
  const [skills, setSkills] = useState([])
  const [templates, setTemplates] = useState([])
  const [stackNeeded, setStackNeeded] = useState([])
  const [createProcess, setCreateProcess] = useState(false)
  const [selectedItems, setSelectedItems] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])
  const [selectedItems1, setSelectedItems1] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])
  let tech = [
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
  useEffect(() => {
    fetch('http://192.168.137.33:8001/templates/getAllSkills')
      .then((response) => response.json())
      .then((res) => {
        setCompetitions(res['templates'])
        setSkills(res['templates'])
      })
    MainApi.getMyTemplates().then((val) => setTemplates(val))
  }, [])

  function Selecter({ id, text }) {
    const [selected, setSelected1] = useState('')
    return (
      <Box
        onClick={() => {
          console.log(selectedItems)
          let selectedItemsTmp = selectedItems
          selectedItemsTmp[id] = !selectedItemsTmp[id]
          setSelected1(selectedItemsTmp[id])
          setSelectedItems(selectedItemsTmp)
        }}
        minWidth={'100px'}
        height={'50px'}
        borderRadius={2}
        color={selected ? 'white' : 'black'}
        bgcolor={selected ? primaryColor : 'white'}
        padding={2}
        sx={{
          userSelect: 'none',
          boxShadow: `inset 0px 0px 0px 3px ${
            !selected ? primaryColor : primaryColor
          }`
        }}
        className='flex justify-center items-center'
      >
        {text}
      </Box>
    )
  }
  function Selecter1({ id, text }) {
    const [selected, setSelected1] = useState('')
    return (
      <Box
        onClick={() => {
          console.log(selectedItems1)
          let selectedItemsTmp = selectedItems1
          selectedItemsTmp[id] = !selectedItemsTmp[id]
          setSelected1(selectedItemsTmp[id])
          setSelectedItems1(selectedItemsTmp)
        }}
        minWidth={'100px'}
        height={'50px'}
        borderRadius={2}
        color={selected ? 'white' : 'black'}
        bgcolor={selected ? primaryColor : 'white'}
        padding={2}
        sx={{
          userSelect: 'none',
          boxShadow: `inset 0px 0px 0px 3px ${
            !selected ? primaryColor : primaryColor
          }`
        }}
        className='flex justify-center items-center'
      >
        {text}
      </Box>
    )
  }

  function CreateBlock() {
    const [valStag, setValStag] = useState(0)
    const [textVal, setTextVal] = useState('')
    return (
      <Box
        top={0}
        left={0}
        zIndex={15}
        width={'100vw'}
        height={'100vh'}
        bgcolor={'rgba(180,180,180,0.8)'}
        position={'absolute'}
        className='flex justify-center items-center'
      >
        <Box
          onClick={() => {
            setCreateProcess(false)
          }}
          top={0}
          left={0}
          zIndex={15}
          width={'100vw'}
          height={'100vh'}
          bgcolor={'rgba(180,180,180,0.8)'}
          position={'absolute'}
          className='flex justify-center items-center'
        ></Box>
        <Box
          width={1280}
          zIndex={17}
          bgcolor={'white'}
          borderRadius={4}
          padding={4}
        >
          <Box fontWeight={700} fontSize={28}>
            Мастер создания шаблонов
          </Box>
          <Box marginY={2}>Введите название</Box>
          <TextField
            fullWidth
            value={textVal}
            onChange={(e) => {
              setTextVal(e.target.value)
            }}
          ></TextField>
          <Box marginY={2}>Выберите компетенции</Box>
          <Box
            className='flex flex-row flex-wrap justify-between'
            width={'100%'}
          >
            {tech.map((e, i) => {
              return <Selecter key={i} id={i} text={e}></Selecter>
            })}
          </Box>
          <Box marginY={2}>{'Стаж работы: ' + valStag + ' мес.'}</Box>
          <Slider
            aria-label='Temperature'
            defaultValue={0}
            shiftStep={1}
            getAriaValueText={(val) => {
              setValStag(val)
            }}
            step={2}
            marks
            min={0}
            max={48}
            sx={{ color: primaryColor }}
          />
          <Box marginY={2}>Выберите свойства человека</Box>
          <Box
            className='flex flex-row flex-wrap justify-between'
            width={'100%'}
            gap={2}
          >
            {listSoftSkills.map((e, i) => {
              return <Selecter1 key={i} id={i} text={e}></Selecter1>
            })}
          </Box>
          <Box
            marginY={2}
            width={'100%'}
            bgcolor={primaryColor}
            paddingY={3}
            color={'white'}
            borderRadius={4}
            className='flex justify-center items-start'
            onClick={() => {
              MainApi.createNewTemplate(textVal, valStag).then((res) => {
                console.log()
                MainApi.bindTemplateParams(
                  res.data['template']['id'],
                  tech.filter((e, i) => {
                    return selectedItems[i]
                  }),
                  listSoftSkills.filter((e, i) => {
                    return selectedItems[i]
                  })
                )
              })
            }}
          >
            Создать новый шаблон
          </Box>
        </Box>
      </Box>
    )
  }

  useEffect(() => {
    MainApi.getStackFromTemplateByName(selected).then((val) =>
      setStackNeeded(val)
    )
  }, [selected])

  return (
    <Box flex={1} height={'100%'} paddingX={4}>
      {createProcess ? <CreateBlock></CreateBlock> : <></>}
      <Box
        fontSize={24}
        height={80}
        className='flex items-center'
        fontWeight={600}
      >
        Шаблоны
      </Box>
      <Box>
        <Select
          fullWidth
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value)
          }}
        >
          {templates.map((val, ind) => {
            return (
              <MenuItem key={ind} value={val}>
                {val}
              </MenuItem>
            )
          })}
        </Select>
      </Box>
      <Box
        className='flex flex-row flex-wrap justify-around'
        marginTop={2}
        width={'100%'}
        gap={1}
      >
        {competitions.map((val, ind) => (
          <Box
            key={ind}
            width={110}
            height={110}
            borderRadius={4}
            padding={0.3}
            borderColor={primaryColor}
            border={
              stackNeeded.includes(val) ? '4px solid ' + primaryColor : '0'
            }
            bgcolor='white'
            className='flex flex-col items-center justify-center'
          >
            <Box
              component={'img'}
              src={photoStack[ind]}
              sx={{ objectFit: 'contain' }}
              width={60}
              height={60}
            ></Box>
            {val}
          </Box>
        ))}
      </Box>
      <Box
        className='flex flex-row flex-wrap justify-around'
        marginTop={2}
        width={'100%'}
        gap={1}
      >
        {stackNeeded.map((val, ind) => {
          console.log(stackNeeded)
          if (val[0] == '!')
            return (
              <Box
                key={ind}
                height={50}
                borderRadius={4}
                padding={0.3}
                paddingX={4}
                borderColor={primaryColor}
                border={
                  stackNeeded.includes(val) ? '4px solid ' + primaryColor : '0'
                }
                bgcolor='white'
                className='flex flex-col items-center justify-center'
              >
                {val.slice(1)}
              </Box>
            )
        })}
      </Box>
      <Box
        width={'100%'}
        height={100}
        bgcolor={'white'}
        marginTop={3}
        border={'5px solid'}
        borderColor={primaryColor}
        borderRadius={4}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={2}
        onClick={() => {
          setCreateProcess(true)
        }}
      >
        <Box fontSize={0} lineHeight={2} whiteSpace={'none'}>
          <AutoFixHighOutlinedIcon
            sx={{ fontSize: 42 }}
          ></AutoFixHighOutlinedIcon>
        </Box>
        <Box fontSize={24} lineHeight={0.7} whiteSpace={'none'}>
          Мастер создания шаблонов
        </Box>
      </Box>
    </Box>
  )
}
