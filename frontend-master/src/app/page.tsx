'use client'
import Image from 'next/image'
import { Box } from '@mui/material'
import { Roboto } from 'next/font/google'

import SearchIcon from '@mui/icons-material/Search'
import {
  fourthColor,
  greyColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
import { InferGetStaticPropsType } from 'next/types'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export default function Home() {
  const router = useRouter()

  return (
    <Box
      minHeight={'800px'}
      margin={'auto'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        bgcolor={'rgb(253,253,253)'}
        overflow={'hidden'}
        width={'100%'}
        position={'relative'}
        zIndex={10}
      >
        <RandomFigures></RandomFigures>
        <Header></Header>
        <MainBanner></MainBanner>
      </Box>
      <StatsInfo></StatsInfo>
      <ContentBlocks></ContentBlocks>
      <SubscriptionsBlock></SubscriptionsBlock>
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
  let colorLogo = primaryColor
  let colorMenu = 'grey'
  if (typeof window !== 'undefined')
    return (
      <Box
        margin={'auto'}
        maxWidth={1200}
        paddingTop={4}
        paddingX={10}
        display={'flex'}
        justifyContent={'space-between'}
        sx={{
          '@media (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingX: 5
          }
        }}
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
        <Box
          display={'flex'}
          flexDirection={'row'}
          gap={2}
          sx={{
            '@media (max-width: 768px)': {
              paddingTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={2}
            color={colorMenu}
            sx={{
              '@media (max-width: 900px)': {
                display: 'none'
              },
              '@media (max-width: 768px)': {
                display: 'none',
                flexDirection: 'column'
              }
            }}
          >
            <Box>Главная</Box>
            <Box>О нас</Box>
            <Box>Магазин</Box>
            <Box>Сервис</Box>
            <Box>Контакты</Box>
          </Box>
          <Box color={colorLogo} display={'flex'} alignItems={'center'}>
            <SearchIcon></SearchIcon>
          </Box>
          {window.localStorage.getItem('access_token') ? (
            <SignOutButton />
          ) : (
            <SignInButton />
          )}
        </Box>
      </Box>
    )
  else return <Box></Box>
}

function MainBanner() {
  let colorText = primaryColor
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
      sx={{
        '@media (max-width: 768px)': {
          paddingX: 5,
          height: 700,
          paddingTop: 0,
          marginTop: 0
        }
      }}
    >
      <Box
        display={'flex'}
        gap={10}
        flexDirection={'row'}
        height={'100%'}
        sx={{
          '@media (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={2}
          flex={1}
          sx={{
            '@media (max-width: 768px)': {
              flex: 0,
              minHeight: 300
            }
          }}
        >
          <Box
            fontSize={48}
            fontWeight={900}
            lineHeight={1.1}
            color={colorText}
            sx={{
              animationName: 'slideintext',
              animationDuration: '2s',
              '@media (max-width: 350px)': {
                fontSize: 36
              },
              '@keyframes slideintext': {
                from: {
                  opacity: '30%',
                  width: '100%'
                },

                to: {
                  opacity: '100%',
                  width: '100%'
                }
              }
            }}
          >
            <Box>Пешка</Box>
            <Box>Это очень</Box>
            <Box>Грамотно</Box>
          </Box>
          <Box
            color={colorSecondText}
            sx={{
              animationName: 'slideintext32',
              animationDuration: '2s',
              '@keyframes slideintext32': {
                from: {
                  marginTop: '10%',
                  opacity: '30%',
                  width: '100%'
                },

                to: {
                  marginTop: '0%',
                  opacity: '100%',
                  width: '100%'
                }
              }
            }}
          >
            Это просто small текст, который я набрал в ручную. Суть в том что
            этот текст должен переноситься и быть сереньким.
          </Box>
        </Box>
        <Box
          flex={1}
          display={'flex'}
          flexDirection={'column'}
          sx={{
            animationName: 'slidein',
            animationDuration: '2s',
            '@keyframes slidein': {
              from: {
                marginTop: '70%',
                opacity: 0,
                width: '100%'
              },

              to: {
                marginTop: '0%',
                opacity: 1,
                width: '100%'
              }
            }
          }}
        >
          <Box
            component={'div'}
            width={'100%'}
            height={'90%'}
            position={'relative'}
            sx={{ objectFit: 'cover' }}
          >
            <Image
              src={'/km/images/pegka.png'}
              alt={''}
              fill
              objectPosition='center'
              objectFit='contain'
            ></Image>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function StatsInfo() {
  let colorText = primaryColor
  return (
    <Box
      width={'100%'}
      minHeight={150}
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
        sx={{
          '@media (max-width: 768px)': {
            display: 'flex',
            flexDirection: 'column',
            paddingY: 3,
            gap: 3
          }
        }}
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
const imageLoader = (url: string) => {
  return url
}
function ContentBlocks() {
  let distance = 2
  let borderRad = 2
  let textColor = primaryColor
  let textColor2 = greyColor(70)
  let blockColor = fourthColor
  return (
    <Box
      border={0}
      maxWidth={1200}
      minHeight={500}
      paddingTop={1}
      paddingX={10}
      sx={{
        '@keyframes onviewopacity': {
          from: {
            transform: 'translateX(-100px)',
            opacity: 0
          },
          '30%': {
            transform: 'translateX(0)',
            opacity: 1
          },
          to: {
            opacity: 1
          }
        },
        animationDuration: '1s',
        '@media (max-width: 768px)': {
          paddingX: 5,

          paddingTop: 2,
          marginTop: 0
        },
        '@media (max-width: 400px)': {
          paddingX: 1,

          paddingTop: 2,
          marginTop: 0
        }
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        gap={distance}
        minHeight={350}
        sx={{
          animationName: 'onviewopacity',
          animationTimeline: 'view()',
          '@media (max-width: 800px)': {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 600
          }
        }}
      >
        <Box
          flex={3}
          borderRadius={2}
          overflow={'hidden'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            width={'90%'}
            height={'90%'}
            component={'div'}
            position={'relative'}
            sx={{
              objectFit: 'contain',
              '@media (max-width: 800px)': { height: 300 }
            }}
          >
            <Image
              src={'/km/images/amnyyam1.png'}
              alt={''}
              fill
              objectFit='contain'
            ></Image>
          </Box>
        </Box>
        <Box
          flex={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={distance}
          sx={{
            '@media (max-width: 800px)': { justifyContent: 'start' }
          }}
        >
          <Box
            display={'flex'}
            paddingX={2}
            alignItems={'center'}
            fontSize={48}
            fontWeight={900}
            color={textColor}
            sx={{ '@media (max-width: 465px)': { fontSize: 36 } }}
          >
            Политические очки
          </Box>
          <Box
            display={'flex'}
            paddingX={2}
            alignItems={'center'}
            fontSize={24}
            fontWeight={500}
            color={textColor2}
          >
            Зарабатывай политические очки, чтобы получить наш уникальный мерч, и
            вообще я хочу смузи, Костя сделай пж, пж, пж
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row-reverse'}
        gap={distance}
        minHeight={350}
        sx={{
          animationName: 'onviewopacity',
          animationTimeline: 'view()',
          '@media (max-width: 800px)': {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 600
          }
        }}
      >
        <Box
          flex={3}
          borderRadius={2}
          overflow={'hidden'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            width={'90%'}
            height={'90%'}
            component={'div'}
            position={'relative'}
            sx={{
              objectFit: 'contain',
              '@media (max-width: 800px)': { height: 300 }
            }}
          >
            <Image
              src={'/km/images/amnyyam2.png'}
              alt=''
              fill
              objectFit='contain'
            ></Image>
          </Box>
        </Box>
        <Box
          flex={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          gap={distance}
          sx={{
            '@media (max-width: 800px)': { justifyContent: 'start' }
          }}
        >
          <Box
            display={'flex'}
            paddingX={2}
            alignItems={'center'}
            fontSize={48}
            fontWeight={900}
            color={textColor}
            sx={{ '@media (max-width: 465px)': { fontSize: 36 } }}
          >
            Рейтинг участников
          </Box>
          <Box
            display={'flex'}
            paddingX={2}
            alignItems={'center'}
            fontSize={24}
            fontWeight={500}
            color={textColor2}
          >
            Победи в приложении, которое просуществует дня 2, это очень важно
            для тебя, так как я хочу выиграть хакатон, посиди попробуй, может
            мерч получишь
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function SubscriptionsBlock() {
  return (
    <Box
      marginTop={4}
      width={'100%'}
      bgcolor={fourthColor}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        flex={1}
        border={0}
        maxWidth={1200}
        minHeight={500}
        paddingTop={1}
        paddingX={10}
        sx={{
          '@media (max-width: 768px)': {
            paddingX: 5,

            paddingTop: 2,
            marginTop: 0
          },
          '@media (max-width: 400px)': {
            paddingX: 1,

            paddingTop: 2,
            marginTop: 0
          }
        }}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box
            fontSize={56}
            fontWeight={900}
            marginTop={8}
            color={primaryColor}
            sx={{
              '@media (max-width: 400px)': {
                textAlign: 'center'
              }
            }}
          >
            Простой метод оплаты
          </Box>
          <Box color={greyColor(80)} fontWeight={500}>
            Оплати чтобы разработчики выпили смузи
          </Box>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            width={'100%'}
            gap={2}
            marginTop={6}
            paddingBottom={12}
            alignItems={'stretch'}
            sx={{
              '@media (max-width: 1024px)': {
                flexDirection: 'column'
              }
            }}
          >
            {SubBlock(
              'Starter',
              'Набор для ребят, которые не могут себе купить смузи',
              'Free',
              'Free forever',
              '0 смузи',
              '0 блендеров',
              '0 денег',
              '0 печенек'
            )}
            {CustomSubBlock(
              'Pro',
              'Набор для профессионалов, которые могут себе купить смузи',
              '100 ₽',
              '100 ₽ forever',
              '2 смузи',
              '1 блендер',
              '100 денег',
              '20 печенек'
            )}
            {SubBlock(
              'Team',
              'Набор для команды ребят, которые не пьют смузи вообще',
              '999 ₽',
              'Vakanda forever',
              '10 бутылок пива',
              '52 сигнала',
              '10 полётов',
              '11 самолётов'
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function SubBlock(
  name: string,
  desc: string,
  price: string,
  priceDesc: string,
  firstOption: string,
  secondOption: string,
  thirdOption: string,
  fourthOption: string
) {
  return (
    <Box
      flex={1}
      className={'subsBlock'}
      bgcolor={'white'}
      borderRadius={4}
      border={1}
      borderColor={greyColor(10)}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      sx={{
        animationName: 'upBlocksPrice',
        animationTimeline: 'view()'
      }}
    >
      <Box
        height={'100%'}
        padding={3}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} flexDirection={'column'}>
          <Box fontSize={24} fontWeight={700} color={primaryColor}>
            {name}
          </Box>
          <Box fontSize={16} color={greyColor(50)}>
            {desc}
          </Box>
          <Box
            paddingY={2}
            fontSize={56}
            fontWeight={900}
            color={primaryColor}
            lineHeight={1}
          >
            {price}
          </Box>
          <Box fontSize={16} fontWeight={300} color={greyColor(50)}>
            {priceDesc}
          </Box>
          <Box
            marginTop={3}
            height={'1px'}
            width={'100%'}
            bgcolor={greyColor(10)}
            marginBottom={3}
          ></Box>
          <Box display={'flex'} flexDirection={'column'} gap={1.25}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={greyColor(100)}>
                {firstOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={greyColor(100)}>
                {secondOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={greyColor(100)}>
                {thirdOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={greyColor(100)}>
                {fourthOption}
              </Box>
            </Box>
          </Box>
          <Box
            marginTop={1}
            fontSize={16}
            fontWeight={300}
            color={primaryColor}
            sx={{ textDecoration: 'underline' }}
          >
            Подробнее...
          </Box>
        </Box>

        <Box
          marginTop={2}
          height={50}
          width={'100%'}
          bgcolor={thirdColor}
          borderRadius={3}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          Выбрать
        </Box>
      </Box>
    </Box>
  )
}
function CustomSubBlock(
  name: string,
  desc: string,
  price: string,
  priceDesc: string,
  firstOption: string,
  secondOption: string,
  thirdOption: string,
  fourthOption: string
) {
  return (
    <Box
      className={'subsBlock'}
      flex={1}
      bgcolor={secondaryColor}
      color={'white'}
      borderRadius={4}
      border={1}
      borderColor={greyColor(10)}
      boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
      sx={{
        animationName: 'upBlocksPricePrimary',
        animationTimeline: 'view()',
        '@keyframes upBlocksPricePrimary': {
          from: {
            transform: 'translateY(30px)',
            opacity: 0
          },
          '30%': {
            opacity: 1,
            transform: 'translateY(0px)'
          },
          to: {
            opacity: 1
          }
        },
        '@keyframes upBlocksPrice': {
          from: {
            transform: 'translateY(100px)',
            opacity: 0
          },
          '30%': {
            opacity: 1,
            transform: 'translateY(0px)'
          },
          to: {
            opacity: 1
          }
        }
      }}
    >
      <Box
        height={'100%'}
        padding={3}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} flexDirection={'column'}>
          <Box fontSize={24} fontWeight={700} color={thirdColor}>
            {name}
          </Box>
          <Box fontSize={16} color={'white'}>
            {desc}
          </Box>
          <Box
            paddingY={2}
            fontSize={56}
            fontWeight={900}
            color={thirdColor}
            lineHeight={1}
          >
            {price}
          </Box>
          <Box fontSize={16} fontWeight={300} color={'white'}>
            {priceDesc}
          </Box>
          <Box
            marginTop={3}
            height={'1px'}
            width={'100%'}
            bgcolor={'white'}
            marginBottom={3}
          ></Box>
          <Box display={'flex'} flexDirection={'column'} gap={1.25}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={'white'}>
                {firstOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={'white'}>
                {secondOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={'white'}>
                {thirdOption}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Box>✓</Box>
              <Box fontSize={16} fontWeight={500} color={'white'}>
                {fourthOption}
              </Box>
            </Box>
          </Box>
          <Box
            marginTop={1}
            fontSize={16}
            fontWeight={300}
            color={fourthColor}
            sx={{ textDecoration: 'underline' }}
          >
            Подробнее...
          </Box>
        </Box>

        <Box
          marginTop={2}
          height={50}
          width={'100%'}
          bgcolor={fourthColor}
          borderRadius={3}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          color={'black'}
        >
          Выбрать
        </Box>
      </Box>
    </Box>
  )
}
