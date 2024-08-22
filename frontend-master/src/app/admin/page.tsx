'use client'
import { Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  fourthColor,
  greyColor,
  primaryColor,
  secondaryColor,
  thirdColor
} from '@/colors/colors'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Landing() {
  const router = useRouter()

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1300}>
        <Box></Box>
      </Box>
    </Box>
  )
}
