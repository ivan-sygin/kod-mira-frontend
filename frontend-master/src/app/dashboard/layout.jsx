'use client'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined'
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined'
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useRouter } from 'next/navigation'
import {
  default as ColorsApp,
  fourthColor,
  greyColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const [selected, setSelected] = useState(0)
  const [shorty, setShorty] = useState(true)
  const list = ['main', 'requests', 'profile', 'create', 'templates']
  useEffect(() => {
    setSelected(list.indexOf(sel))
  }, [])
  let img =
    'https://sun9-7.userapi.com/impg/43q_bnKSgllm6yD3PxP8SSZp_NUtl1aDkcVW0Q/d7rMTeYSqBE.jpg?size=1280x1280&quality=95&sign=00a53091a2bfb5eb2c3f6f0fbc23842e&type=album'
  let asPath
  let sel

  if (typeof window !== 'undefined') {
    asPath = window.location.href
    sel = asPath.split('/')[asPath.split('/').indexOf('dashboard') + 1]
  }

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box
        width={'95%'}
        className='bg-gray-100'
        borderRadius={5}
        marginTop={1}
        height={'95vh'}
      >
        <Box display={'flex'} flexDirection={'row'} height={'100%'}>
          <Box
            display={'flex'}
            justifyContent={'start'}
            alignItems={'center'}
            flexDirection={'column'}
            minWidth={shorty ? 200 : 0}
            width={shorty ? 200 : 100}
            height={'100%'}
            paddingBottom={2}
            bgcolor={primaryColor}
            borderRadius={'20px 0px 0px 20px'}
            sx={{ transition: 'all 0.3s' }}
          >
            <LogoDashboard shorty={shorty}></LogoDashboard>
            <ListOfMenu
              selected={selected}
              setSelected={setSelected}
              shorty={shorty}
              setShorty={setShorty}
            ></ListOfMenu>
          </Box>

          {children}
        </Box>
      </Box>
    </Box>
  )
}

function LogoDashboard({ shorty }) {
  let sizeLogo = 50
  let fontSize = 21
  let nameApp = 'СОК'
  return (
    <Box className='flex flex-row justify-center items-center' height={100}>
      <Box width={sizeLogo} height={sizeLogo}>
        <Box
          component={'img'}
          src='http://enotgpt.ru/api/file-server/photos/1bd472a95c1563ffe0c38c48bc96a8a0d60d210d309a4779d25820a90daec099.png'
        ></Box>
      </Box>
      {true ? (
        <Box
          overflow={'hidden'}
          className='font-sans'
          fontSize={fontSize}
          fontWeight={700}
          color='white'
          display={'block'}
          whiteSpace={'nowrap'}
          width={shorty ? 100 : 0}
          sx={{ transition: 'all 0.3s' }}
        >
          {nameApp}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  )
}

function ListOfMenu({ selected, setSelected, shorty, setShorty }) {
  return (
    <Box
      className='flex flex-col justify-start items-start'
      gap={1}
      width={'100%'}
      position={'relative'}
      paddingX={4}
      height={'100%'}
      sx={{ transition: 'all 0.3s' }}
    >
      <ItemFromMenu
        id={0}
        shorty={shorty}
        icon={<DashboardOutlinedIcon></DashboardOutlinedIcon>}
        text='Главная'
        adress={'/dashboard/main'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemFromMenu
        id={1}
        shorty={shorty}
        icon={<BoyOutlinedIcon></BoyOutlinedIcon>}
        text='Заявки'
        adress={'/dashboard/requests'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemFromMenu
        id={2}
        shorty={shorty}
        icon={<FaceOutlinedIcon></FaceOutlinedIcon>}
        text='Профиль'
        adress={'/dashboard/profile/1'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemFromMenu
        id={3}
        shorty={shorty}
        icon={<DriveFolderUploadOutlinedIcon></DriveFolderUploadOutlinedIcon>}
        text='Загрузка'
        selected={selected}
        adress={'/dashboard/create'}
        setSelected={setSelected}
      />
      <ItemFromMenu
        id={4}
        shorty={shorty}
        icon={<CopyAllOutlinedIcon></CopyAllOutlinedIcon>}
        text='Шаблоны'
        selected={selected}
        adress={'/dashboard/templates'}
        setSelected={setSelected}
      />
      <Box flex={1}></Box>
      <Shorter
        id={5}
        shorty={shorty}
        icon={<ArrowBackIosNewIcon></ArrowBackIosNewIcon>}
        text='Свернуть'
        selected={selected}
        adress={'requests'}
        setShorty={setShorty}
      />

      <SelectedBlock selected={selected} shorty={shorty}></SelectedBlock>
    </Box>
  )
}

function ItemFromMenu({
  id,
  adress,
  text,
  icon,
  selected,
  setSelected,
  shorty
}) {
  const router = useRouter()

  return (
    <Box
      className='flex flex-row justify-start items-start'
      color={selected != id ? 'white' : primaryColor}
      borderRadius={3}
      paddingX={1}
      paddingY={2}
      zIndex={3}
      width={shorty ? '100%' : 40}
      overflow={'hidden'}
      gap={1}
      onClick={() => {
        setSelected(id)
        router.push(adress)
      }}
      sx={{ cursor: 'pointer', transition: 'all 0.3s' }}
    >
      {icon}
      {true ? <Box>{text}</Box> : <></>}
    </Box>
  )
}
function Shorter({ id, adress, text, icon, selected, setShorty, shorty }) {
  const router = useRouter()

  return (
    <Box
      className='flex flex-row justify-start items-start'
      color={selected != id ? 'white' : primaryColor}
      borderRadius={3}
      paddingX={1}
      paddingY={2}
      zIndex={3}
      width={shorty ? '100%' : 40}
      overflow={'hidden'}
      gap={1}
      onClick={() => {
        setShorty(!shorty)
      }}
      sx={{
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          transition: 'all 0.3s',
          transform: !shorty ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
      >
        {icon}
      </Box>
      {true ? <Box>{text}</Box> : <></>}
    </Box>
  )
}
function SelectedBlock({ selected, shorty }) {
  return (
    <Box
      position={'absolute'}
      top={+selected * 56 + 8 * selected}
      left={shorty ? '10%' : '27%'}
      zIndex={0}
      width={shorty ? 200 : 50}
      height={56}
      borderRadius={'20px 20px 20px 20px'}
      className='bg-gray-100'
      sx={{ transition: 'all 0.3s' }}
    ></Box>
  )
}
