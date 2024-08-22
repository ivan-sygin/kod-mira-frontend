import { primaryColor } from '@/colors/colors'
import { Box } from '@mui/material'
import Link from 'next/link'

function SignInButton() {
  return (
    <Link href={'/login'}>
      <Box
        border={1}
        paddingX={3}
        paddingY={1}
        borderRadius={10}
        color={primaryColor}
      >
        Войти
      </Box>
    </Link>
  )
}

export default SignInButton
