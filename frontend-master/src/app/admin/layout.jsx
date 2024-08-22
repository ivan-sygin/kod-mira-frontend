'use client'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import { useRouter } from 'next/navigation'
import {
  fourthColor,
  greyColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function AdminLayout({ children }) {
  const router = useRouter()

  useEffect(() => {
    if (
      !localStorage.getItem('access_token') ||
      localStorage.getItem('role') !== 'admin'
    )
      router.push('/')

    const getProfileInfo = async () => {
      try {
        const { data } = await axios.get(
          'https://enotgpt-mainserver.serveo.net/users/me',
          userData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
          }
        )

        console.log(data)
        localStorage.setItem('phone', userData.phone)
        router.push('/login/pincode')
      } catch (err) {
        console.error(err.response.data)
      }
    }
    getProfileInfo()
  }, [])

  let img =
    'https://sun9-7.userapi.com/impg/43q_bnKSgllm6yD3PxP8SSZp_NUtl1aDkcVW0Q/d7rMTeYSqBE.jpg?size=1280x1280&quality=95&sign=00a53091a2bfb5eb2c3f6f0fbc23842e&type=album'

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box width={1300} paddingTop={2}>
        <Box display={'flex'} flexDirection={'row'}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            width={400}
          >
            <CircularAvatar img={img}></CircularAvatar>
            <NameAdmin name={'Ivan'}></NameAdmin>
            <ButtonsBox></ButtonsBox>
          </Box>

          {children}
        </Box>
      </Box>
    </Box>
  )
}

function CircularAvatar({ img }) {
  return (
    <Box
      width={70}
      height={70}
      borderRadius={100}
      bgcolor={'white'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      boxShadow={'rgba(100, 100, 111, 0.4) 0px 4px 4px 0px;'}
    >
      <Box width={60} height={60} borderRadius={100} overflow={'hidden'}>
        <Box component={'img'} src={img}></Box>
      </Box>
    </Box>
  )
}
function NameAdmin({ name }) {
  return (
    <Box paddingTop={1} fontSize={24}>
      {name}
    </Box>
  )
}

function ButtonsBox() {
  const [selected, setSelected] = useState(1)
  return (
    <Box
      paddingTop={6}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      flexWrap={'wrap'}
      gap={3}
      paddingX={6}
    >
      <ButtonToRedir
        id={1}
        icon={
          <DashboardOutlinedIcon
            fontSize='inherit'
            color='inherit'
            sx={{ display: 'block' }}
          />
        }
        name='Общее'
        url='/admin/general'
        selected={selected}
        setSelected={setSelected}
      ></ButtonToRedir>
      <ButtonToRedir
        id={2}
        icon={
          <PeopleOutlineOutlinedIcon
            fontSize='inherit'
            color='inherit'
            sx={{ display: 'block' }}
          />
        }
        name='Аккаунты'
        url='/admin/accounts'
        selected={selected}
        setSelected={setSelected}
      ></ButtonToRedir>
      <ButtonToRedir
        id={3}
        icon={
          <CalendarTodayOutlinedIcon
            fontSize='inherit'
            color='inherit'
            sx={{ display: 'block' }}
          />
        }
        name='Календарь'
        url='/admin/calendar'
        selected={selected}
        setSelected={setSelected}
      ></ButtonToRedir>
      <ButtonToRedir
        id={4}
        icon={
          <AnalyticsOutlinedIcon
            fontSize='inherit'
            color='inherit'
            sx={{ display: 'block' }}
          />
        }
        name='Аналитика'
        url='/admin/analitics'
        selected={selected}
        setSelected={setSelected}
      ></ButtonToRedir>
      <Link
        href={'/login'}
        onClick={() => {
          localStorage.removeItem('access_token')
          localStorage.removeItem('user_phone')
          localStorage.removeItem('role')
        }}
      >
        <ButtonToRedir
          id={5}
          icon={
            <ExitToAppOutlinedIcon
              fontSize='inherit'
              color='inherit'
              sx={{ display: 'block' }}
            />
          }
          name='Выйти'
          url='/login'
          selected={selected}
          setSelected={setSelected}
        ></ButtonToRedir>
      </Link>
    </Box>
  )
}

function ButtonToRedir({ id, icon, name, url, selected, setSelected }) {
  const router = useRouter()
  let colorButton = greyColor(3)
  let colorText = greyColor(60)
  let selectedIconColor = primaryColor
  if (selected == id) {
    colorButton = primaryColor
    colorText = primaryColor
    selectedIconColor = 'white'
  }
  return (
    <Box
      onClick={() => {
        setSelected(id)
        router.push(url)
      }}
      flex={1}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        width={50}
        height={50}
        bgcolor={colorButton}
        borderRadius={2}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;'}
        sx={{ transition: 'all 0.4s' }}
      >
        <Box
          fontSize={32}
          color={selectedIconColor}
          height={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {icon}
        </Box>
      </Box>
      <Box fontWeight={700} color={colorText} paddingTop={1}>
        {name}
      </Box>
    </Box>
  )
}
