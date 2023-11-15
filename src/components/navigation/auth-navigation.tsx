// components/auth/AuthNavigation.tsx
import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'
import Link from 'next/link'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <Link href="https://websparepart123.000webhostapp.com/auth/register">
        <a>
          <StyledButton disableHoverEffect={true} variant="outlined">
            Daftar
          </StyledButton>
        </a>
      </Link>
      <Link href="https://websparepart123.000webhostapp.com/login">
        <a>
          <StyledButton disableHoverEffect={true}>Masuk</StyledButton>
        </a>
      </Link>
    </Box>
  )
}

export default AuthNavigation
