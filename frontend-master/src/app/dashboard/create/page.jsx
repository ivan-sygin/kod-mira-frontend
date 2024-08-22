'use client'
import { Box, CircularProgress } from '@mui/material'
import { Grid } from 'react-loader-spinner'
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined'
import { primaryColor } from '@/colors/colors'
import { MainApi } from '@/api/main-api/methods'
import Snackbar from '@mui/material/Snackbar'
import { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
export default function CreatePage() {
  const [loading, setLoading] = useState(false)
  const [resultReq, setResultReq] = useState(null)
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    setLoading(true)
    MainApi.uploadResume(event.target.files[0]).then((val) => {
      setLoading(false)
      event.target.value = null
      setResultReq(val)
      console.log(val)
      setFile(null)
    })
    console.log('Загруженный файл:', event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // здесь можно выполнить отправку файла на сервер
    console.log('Загруженный файл:', file)
  }
  useEffect(() => {
    if (resultReq) setOpen(true)
  }, [resultReq])
  let innerBlock = (
    <>
      <Box
        id='bukabaka'
        accept='.doc, .docx, .pdf, .zip, .rtf'
        component={'input'}
        type='file'
        onChange={handleFileChange}
        display={'none'}
      ></Box>
      <Box className='flex flex-col justify-center items-center'>
        <UploadOutlinedIcon
          sx={{ fontSize: '128px', color: primaryColor }}
        ></UploadOutlinedIcon>
        <Box fontWeight={700} fontSize={48} className=' text-gray-700'>
          Выберите файл для отправки
        </Box>
        <Box
          fontWeight={500}
          paddingTop={1}
          fontSize={24}
          className=' text-gray-400'
        >
          Поддерживаемые файлы .docx .pdf .zip .rtf
        </Box>
      </Box>
    </>
  )
  if (loading) {
    innerBlock = (
      <Box
        className='flex flex-col justify-center items-center'
        sx={{
          '@keyframes pulsing': {
            from: {
              transform: 'scale(1)'
            },
            '50%': {
              transform: 'scale(1.05)'
            },
            to: {
              transform: 'scale(1)'
            }
          }
        }}
      >
        <Box
          sx={{
            animationName: 'pulsing',
            animationDuration: '3s',
            animationIterationCount: 'infinite'
          }}
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
        <Box
          paddingX={20}
          paddingTop={6}
          textAlign={'center'}
          color={primaryColor}
        >
          Для систематизации информации из резюме используется языковая модель,
          это может занять пару минут...
        </Box>
      </Box>
    )
  }
  let snack = <></>
  if (resultReq) {
    if (resultReq.isError) {
      snack = (
        <Snackbar
          message={resultReq.data.error}
          open={open}
          onClose={() => {
            setOpen(false)
          }}
          autoHideDuration={3000}
        >
          <Alert
            onClose={() => {
              setOpen(false)
            }}
            severity='error'
            variant='filled'
            sx={{ width: '100%' }}
          >
            {resultReq.data.error}
          </Alert>
        </Snackbar>
      )
    } else {
      snack = (
        <Snackbar
          message={'Создано успешно'}
          open={open}
          onClose={() => {
            setOpen(false)
          }}
          autoHideDuration={3000}
        >
          <Alert
            onClose={() => {
              setOpen(false)
            }}
            severity='success'
            variant='filled'
            sx={{ width: '100%' }}
          >
            {'Создано успешно'}
          </Alert>
        </Snackbar>
      )
    }
  }
  return (
    <Box flex={1} height={'100%'} paddingX={4} flexDirection={'column'}>
      {snack}

      <Box
        className='flex items-center'
        paddingTop={3}
        fontWeight={700}
        fontSize={24}
      >
        Загрузка резюме
      </Box>
      <Box
        component={'label'}
        htmlFor='bukabaka'
        onClick={() => {}}
        className='flex items-center justify-center'
        marginTop={3}
        width={'100%'}
        height={'85%'}
        fontWeight={700}
        fontSize={24}
        border={5}
        sx={{ borderStyle: 'dashed', borderColor: primaryColor }}
        borderRadius={4}
      >
        {innerBlock}
      </Box>
    </Box>
  )
}
