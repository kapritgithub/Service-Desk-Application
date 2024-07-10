import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import {Link} from 'react-router-dom'

const AdminLanding = () => {

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 67
    if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth',
        })
    }
}

  return (
    <>
        <AppBar position='fixed' className='Appbar'>
            <Container className='container'>
                <Toolbar>
                    <Box className='boxes'>
                        <Box className='leftItems'>
                            <Typography variant='h5' onClick={() => scrollToSection('hero')}>
                                ADMINISTRATION
                            </Typography>
                            <MenuItem onClick={() => scrollToSection('features')}>
                                <Typography>
                                    Assign Ticket
                                </Typography>                            
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('testimonials')}>
                                <Typography>
                                    Track Assigned Ticket
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => scrollToSection('pricing')}>
                                <Typography>
                                    Resolve Ticket
                                </Typography>
                            </MenuItem>
                        </Box>
                        <Box className='rightItems'>
                            <MenuItem button='true' component={Link} to='/signIn'>
                                <Typography>
                                    Sign-In
                                </Typography>
                            </MenuItem>
                            <MenuItem button='true' component={Link} to='/signUp'>
                                <Typography>
                                    Sign-Up
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        
        </>
  )
}

export default AdminLanding
