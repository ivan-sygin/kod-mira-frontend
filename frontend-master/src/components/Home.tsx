import Image from 'next/image'
import { Box } from '@mui/material'
import { Roboto } from 'next/font/google'
import SearchIcon from '@mui/icons-material/Search'
const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function Home() {
  return (
    <Box minHeight={'800px'} margin={'auto'}>
      <Box
        bgcolor={'rgb(253,253,253)'}
        overflow={'hidden'}
        position={'relative'}
        zIndex={10}
      >
        <RandomFigures></RandomFigures>
        <Header></Header>
        <MainBanner></MainBanner>
      </Box>
      <StatsInfo></StatsInfo>
    </Box>
  )
}

function RandomFigures() {
  return (
    <Box
      left={0}
      right={0}
      width={'100%'}
      maxWidth={1200}
      height={'598px'}
      margin={'auto'}
      zIndex={-1}
      position={'absolute'}
    >
      <Box
        position={'absolute'}
        top={-400}
        left={-200}
        width={500}
        height={500}
        bgcolor={'rgba(100,100,100,0.05)'}
        borderRadius={20}
        sx={{ transform: 'rotate(20deg);' }}
      ></Box>
      <Box
        position={'absolute'}
        bottom={-270}
        right={-50}
        width={500}
        height={500}
        bgcolor={'rgba(100,100,100,0.08)'}
        borderRadius={20}
        sx={{ transform: 'rotate(30deg);' }}
      ></Box>
      <Box
        position={'absolute'}
        bottom={-300}
        right={-0}
        width={500}
        height={500}
        bgcolor={'rgba(100,100,100,0.05)'}
        borderRadius={20}
        sx={{ transform: 'rotate(10deg);' }}
      ></Box>
    </Box>
  )
}

function Header() {
  let sizeIcon = 40
  let colorLogo = '#9883e5'
  let colorMenu = 'grey'
  return (
    <Box
      margin={'auto'}
      maxWidth={1200}
      paddingTop={4}
      paddingX={10}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box display={'flex'} alignItems={'center'} gap={1.5}>
        <Box
          width={sizeIcon}
          height={sizeIcon}
          borderRadius={100}
          bgcolor={colorLogo}
        ></Box>

        <Box
          className={roboto.className}
          fontWeight={700}
          fontSize={24}
          color={colorLogo}
        >
          ИмяПроекта
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={2}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          gap={2}
          color={colorMenu}
        >
          <Box>Главная</Box>
          <Box>О нас</Box>
          <Box>Магазин</Box>
          <Box>Сервис</Box>
          <Box>Контакты</Box>
        </Box>
        <Box color={colorMenu} display={'flex'} alignItems={'center'}>
          <SearchIcon></SearchIcon>
        </Box>
        <Box
          border={1}
          paddingX={3}
          paddingY={1}
          borderRadius={10}
          color={colorLogo}
        >
          Войти
        </Box>
      </Box>
    </Box>
  )
}

function MainBanner() {
  let colorText = 'rgb(36,43,62);'
  let colorSecondText = 'grey'
  return (
    <Box
      margin={'auto'}
      border={0}
      maxWidth={1200}
      marginTop={3}
      height={500}
      paddingTop={4}
      paddingX={10}
    >
      <Box display={'flex'} gap={10} flexDirection={'row'} height={'100%'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={2}
          flex={1}
        >
          <Box
            fontSize={48}
            fontWeight={900}
            lineHeight={1.1}
            color={colorText}
          >
            <Box>Пежка</Box>
            <Box>Это очень</Box>
            <Box>Грамотно</Box>
          </Box>
          <Box color={colorSecondText}>
            Это просто small текст, который я набрал в ручную. Суть в том что
            этот текст должен переноситься и быть сереньким.
          </Box>
        </Box>
        <Box flex={1} display={'flex'} flexDirection={'column'}>
          <Box
            component={'img'}
            width={'100%'}
            height={'90%'}
            sx={{ objectFit: 'contain' }}
            src={
              'https://png.klev.club/uploads/posts/2024-04/png-klev-club-qvrv-p-peshka-png-7.png'
            }
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

function StatsInfo() {
  let colorText = '#9883e5'
  return (
    <Box
      width={'100%'}
      height={150}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'rgb(245,245,245)'}
      color={'grey'}
    >
      <Box
        maxWidth={1200}
        flex={1}
        margin={'auto'}
        paddingX={10}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box fontSize={36} fontWeight={'900'} color={colorText}>
            85+
          </Box>
          <Box>Лет</Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box fontSize={36} fontWeight={'900'} color={colorText}>
            95K
          </Box>
          <Box>Клиентов</Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box fontSize={36} fontWeight={'900'} color={colorText}>
            60+
          </Box>
          <Box>Бамбамбам</Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box fontSize={36} fontWeight={'900'} color={colorText}>
            80%
          </Box>
          <Box>Медведь</Box>
        </Box>
      </Box>
    </Box>
  )
}
