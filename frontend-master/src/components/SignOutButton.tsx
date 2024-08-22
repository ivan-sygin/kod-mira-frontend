import { primaryColor } from '@/colors/colors'
import { Box } from '@mui/material'
import Link from 'next/link'

function SignOutButton() {
  return (
    <Link
      href={'/login'}
      onClick={() => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_phone')
        localStorage.removeItem('role')
      }}
    >
      <Box
        border={1}
        paddingX={3}
        paddingY={1}
        borderRadius={10}
        color={primaryColor}
      >
        Выйти
      </Box>
    </Link>
  )
}

export default SignOutButton
