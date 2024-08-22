import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  fourthColor,
  greyColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
export default function Landing() {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1200}>
        <Header></Header>
        <FirstInfo></FirstInfo>
        <ListAdvantages></ListAdvantages>
      </Box>
    </Box>
  )
}

function Header() {
  return (
    <Box padding={2} display={'flex'} justifyContent={'space-between'}>
      <Box fontSize={36} fontWeight={900} color={primaryColor}>
        E-notGPT
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <MenuIcon fontSize='large'></MenuIcon>
      </Box>
    </Box>
  )
}
function FirstInfo() {
  return (
    <Box padding={2}>
      <Box fontSize={36} fontWeight={700} lineHeight={1.2} color={primaryColor}>
        Наше приложение с подпиской на Смузи
      </Box>
      <Box marginTop={2} fontSize={20} fontWeight={500} lineHeight={1.3}>
        Кто забыл - 1881 год. Почасовая оплата смузи. За 20 лет у меня было 0
        пежек, так что я очень хороший программист
      </Box>
    </Box>
  )
}

function ListAdvantages() {
  return (
    <Box
      padding={2}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box
        fontSize={36}
        fontWeight={700}
        lineHeight={1.2}
        color={primaryColor}
        textAlign={'center'}
      >
        Там где ты мышей ловил...
      </Box>
      <Box
        width={'50%'}
        height={10}
        bgcolor={secondaryColor}
        marginTop={2}
      ></Box>
      <Box marginTop={2} fontSize={20} fontWeight={500} lineHeight={1.3}>
        Кто забыл - 1881 год. Почасовая оплата смузи. За 20 лет у меня было 0
        пежек, так что я очень хороший программист
      </Box>
    </Box>
  )
}
