'use client'
import { authUrl } from '@/api/mainurls'
/*eslint no-undef: "error"*/
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Component() {
  const router = useRouter()

  const [userData, setUserData] = useState({
    code: '',
    phone: ''
  })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('access_token')) router.push('/')
      setUserData({
        phone: localStorage.getItem('user_phone') || '',
        code: localStorage.getItem('verification_code') || ''
      })
    }
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        authUrl + '/create/verify_by_phone',
        userData
      )
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('access_token', data.data.access_token)
        window.localStorage.setItem('role', data.data.role)
      }

      console.log(data)
      if (
        data.data.role == 'recruiter' ||
        data.data.role == 'hiring_manager' ||
        data.data.role == 'resource_manager'
      )
        router.push('/dashboard')
      else router.push('/')
    } catch (err: any) {
      console.error(err)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-400 to-purple-500'>
      <div className='max-w-md w-full space-y-4 text-center'>
        <h1 className='text-3xl font-bold text-white'>Для продолжения</h1>
        <p className='text-gray-200'>
          Введите проверочный код, который вы получили:
        </p>
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='flex items-center justify-center space-x-2'>
            <noscript></noscript>
            <div
              data-input-otp-container='true'
              className='flex items-center gap-2'
            >
              <div className='position: absolute; inset: 0px; pointer-events: none;'>
                <input
                  className='h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none border border-gray-300 px-3 py-2  focus:z-10 focus:border-[#7b2cbf] focus:outline-none focus:ring-[#7b2cbf] dark:border-gray-700   dark:focus:border-[#b197fc] dark:focus:ring-[#b197fc]'
                  id='code'
                  name='code'
                  data-input-otp='true'
                  inputMode='numeric'
                  pattern='^[0-9]+$'
                  maxLength={6}
                  autoComplete='one-time-code'
                  placeholder='000000'
                  data-input-otp-mss='0'
                  data-input-otp-mse='0'
                  value={userData.code}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <button
            className='inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'
            type='submit'
          >
            Проверить
          </button>
        </form>
      </div>
    </div>
  )
}
