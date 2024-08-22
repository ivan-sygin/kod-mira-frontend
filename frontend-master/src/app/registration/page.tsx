'use client'
import { authUrl } from '@/api/mainurls'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Component() {
  const router = useRouter()

  const [userData, setUserData] = useState({
    email: null,
    phone: '',
    name: '',
    surname: '',
    patronymic: ''
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('access_token')) router.push('/')
    }
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(authUrl + '/create/', userData)
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user_phone', data.user.phone)
        localStorage.setItem(
          'verification_code',
          data.user.verification_code_phone
        )
      }
      console.log(data)
      router.push('/registration/pincode')
    } catch (err: any) {
      console.log(err.response.data)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-[#7b2cbf] to-[#9d4edd] px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-950'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
            Зарегистрирутесь
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
            Или{' '}
            <Link
              className='font-medium text-[#7b2cbf] hover:text-[#9d4edd] dark:text-[#b197fc] dark:hover:text-[#c4b5fd]'
              href='/login/'
            >
              войдите в существующий аккаунт
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <input defaultValue='true' name='remember' type='hidden' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                htmlFor='surname'
              >
                Фамилия
              </label>
              <input
                className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                id='surname'
                autoComplete='фамилия'
                required
                placeholder='Фамилия'
                type='text'
                name='surname'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                htmlFor='name'
              >
                Имя
              </label>
              <input
                className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                id='name'
                autoComplete='имя'
                required
                placeholder='Имя'
                type='text'
                name='name'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                htmlFor='patronymic'
              >
                Отчество
              </label>
              <input
                className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                id='patronymic'
                autoComplete='Отчество'
                required
                placeholder='Отчество'
                type='text'
                name='patronymic'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                htmlFor='phone'
              >
                Телефон
              </label>
              <input
                className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                id='phone'
                autoComplete='none'
                required
                placeholder='Телефон'
                type='phone'
                name='phone'
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <div>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only'
                htmlFor='password'
              >
                Пароль
              </label>
              <input
                className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-500 dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                id='password'
                autoComplete='current-password'
                required
                placeholder='Пароль'
                type='password'
                name='password'
                onChange={(e) => handleChange(e)}
              />
            </div> */}
          </div>
          <div>
            <button
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-[#7b2cbf] py-2 px-4 text-sm font-medium text-white hover:bg-[#9d4edd] focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:ring-offset-2 dark:bg-[#b197fc] dark:text-gray-950 dark:hover:bg-[#c4b5fd] dark:focus:ring-[#b197fc]'
              type='submit'
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
