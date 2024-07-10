import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import './Testimonials.css'

const Testimonials= ()=>{
    return(
        <Card className='testimonialSection'>
            <CardContent>
                <Typography variant='h4' className='headIsTheBest'>
                    Testimonials of our Users
                </Typography>
                <Typography variant='h6'>
                    best app bro
                    great af
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Testimonials
