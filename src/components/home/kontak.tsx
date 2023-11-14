// components/HomeNewsLetter.tsx
import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  const emailAddress = 'shobarudin67@gmail.com'

  const handleSendEmail = (): void => {
    const subject = 'Pesan dari Kontak Kami'
    const body = 'Tulis pesan Anda di sini...'

    // Membuka aplikasi email default dengan alamat email, subjek, dan tubuh pesan yang ditentukan
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body
    )}`
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }} id="kontak">
      <Container>
        <Box>
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 }, textAlign: 'center' }}>
            Kontak Kami
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                border: '1px solid #ccc',
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Text"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleSendEmail}>
                Kirim
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
