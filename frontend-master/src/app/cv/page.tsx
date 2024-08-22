'use client'
/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'
import CostumPieChart from '@/components/CustomPieChart'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}))

function cvPage() {
  const data = [
    { text: 'Не олежит', flag: true },
    { text: 'Малый опыт', flag: false },
    { text: 'Плохие отзывы', flag: false }
  ]
  const renderBlocks = () => {
    return data.map((item) => {
      const backgroundClass = item.flag ? 'bg-green-400' : 'bg-red-400'
      return (
        <div
          className={`inline-block mr-2 py-1 px-2 rounded-md shadow text-white ${backgroundClass}`}
        >
          {item.text}
        </div>
      )
    })
  }

  return (
    <div className=' container max-w-full px-0'>
      <header className='flex justify-between items-center px-6 py-2 bg-[#ffb155]'>
        <div className='flex flex-row'>
          <Image
            alt='Логотип'
            src='http://enotgpt.ru/api/file-server/photos/1bd472a95c1563ffe0c38c48bc96a8a0d60d210d309a4779d25820a90daec099.png'
            width={50}
            height={50}
            className='rounded-full'
          ></Image>
          <Link
            className='ml-2 my-auto mx-auto text-center hover:bg-[#0000000c] text-[#3c7ea2] hover:text-[#2e627d] text-sm px-3 py-2 rounded-2xl shadow'
            href={'/dashboard'}
          >
            Все резюме
          </Link>
        </div>
        <div className='flex flex-row'>
          <button className=' shadow-md hover:bg-[#0000000c] text-[#3c7ea2] hover:text-[#2e627d] hover:border-[#2e627d] px-3 py-2 rounded-2xl text-xs my-auto mx-auto mr-3'>
            Новое резюме
          </button>
          <Image
            alt='Уведомления'
            src='/km/images/SpeechBubble.svg'
            width={40}
            height={40}
            className='rounded-full mr-1'
          ></Image>
          <Image
            alt='Сообщения'
            src='/km/images/Doorbell.svg'
            width={40}
            height={40}
            className='rounded-full mr-1'
          ></Image>
          <Image
            alt='Аватар'
            src='https://www.meme-arsenal.com/memes/e6087477a867e569e2be47db00dd64eb.jpg'
            width={40}
            height={40}
            className='rounded-full'
          ></Image>
        </div>
      </header>

      <div className='container'>
        <div className='flex mt-4 gap-4 flex-wrap justify-center'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col flex-wrap min-h-fit min-w-fit shadow-md px-3 py-2 rounded-2xl'>
              <Image
                alt='Фото в резюме'
                width={50}
                height={50}
                src='https://www.filepicker.io/api/file/EzwwT5zcSha4wSyr6oTk'
                className='rounded-full self-center'
              ></Image>
              <h1 className='text-2xl font-bold'>Свердлов Виктор Гаврилович</h1>
              <p className='text-gray-600 text-xs'>
                мужчина, 20 лет, 21.02.2004
              </p>
              <p className='text-gray-600 text-xs'>
                Среднеуральск, не готов к переезду, не готов к командировкам
              </p>
            </div>
            <div className='shadow-md px-3 py-2 rounded-2xl'>
              <h3 className='text-base font-bold'>Контакты</h3>
              <p>
                <span className='text-xs'>
                  <a href='tel:+79826191986' className=' hover:text-blue-400'>
                    +7 (982) 619-19-86
                  </a>{' '}
                  WhatsApp
                </span>{' '}
                <br />{' '}
                <span className='text-xs'>
                  <a
                    href='mailto:nosirevdanil@inbox.ru'
                    className=' hover:text-blue-400'
                  >
                    nosirevdanil@inbox.ru
                  </a>
                </span>
              </p>
            </div>
            <div className='shadow-md px-3 py-2 rounded-2xl'>
              <h1 className='text-2xl font-bold'>Software developer</h1>
              <br />
              <p className=' text-xs'>Специализации:</p>
              <p className=' text-xs'>&emsp;— Программист, разработчик</p>
              <br />
              <p className=' text-xs'>Занятость: стажировка</p>{' '}
              <p className=' text-xs'>График работы: удаленная работа</p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='shadow-md px-3 py-2 rounded-2xl'>
              <h1>СТЕК КАЧЕСТВ</h1>
              <div className='mt-2'>{renderBlocks()}</div>
            </div>
            <div className='shadow-md px-3 py-2 rounded-2xl'>
              <CostumPieChart />
            </div>
            <div className='shadow-md px-3 py-2 rounded-2xl'>
              <BorderLinearProgress variant='determinate' value={50} />
            </div>
          </div>
        </div>
        <div className='container max-w-4xl mt-2 '>
          <div className='shadow-md px-3 py-2 rounded-2xl'>
            <h1 className='text-gray-600 text-2xl'>
              Опыт работы 1 год 7 месяцев
            </h1>{' '}
            <br />
            <div className='flex flex-row'>
              <div>
                <p className='text-gray-800 text-xs mr-2'>
                  <span className='block'>Ноябрь 2022 —</span>
                  <span className='block'>по настоящее время</span>
                  <span className='block text-gray-500'>1 год 7 месяцев</span>
                </p>
              </div>
              <div>
                <p className='font-bold text-xs'>GiveBack</p>
                <p className=' text-xs'>Москва, giveback.ru/</p>
                <br />
                <p className='font-bold text-xs'>Software developer</p>
                <p className=' text-xs'>
                  Разработка нового функционала сервиса. Планирование и
                  обсуждение задач. Оценивание задач. Код-ревью. Частично брал
                  на себя задачи manual QA. Стек: React, TypeScript, Apollo,
                  MUI, NodeJS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cvPage
