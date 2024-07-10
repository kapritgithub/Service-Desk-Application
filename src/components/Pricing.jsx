import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import './Pricing.css'

const Pricing= ()=>{
    return(
        <Card className='parentCard'>
            <Typography variant='h4' className='header'>
                PRICING
            </Typography>
            <br></br>
            <Typography variant='h6'>
                If you are an organization, choose any one of the plans and begin immediately:
            </Typography>

            <Card className='cardContent'>
                <Card className='actualCard'>
                    <Typography variant='h5'>
                        FREE
                    </Typography>
                </Card>

                <Card className='actualCard'>
                    <Typography variant='h5'>
                        BASIC
                    </Typography>
                </Card>

                <Card className='actualCard'>
                    <Typography variant='h5'>
                        PRO
                        
                    </Typography>
                    <Typography>
                    (poppular)
                    </Typography>
                </Card>

                <Card className='actualCard'>
                    <Typography  variant='h5'>
                        ENTERPRISE
                    </Typography>
                </Card>
            </Card>
        </Card>
    )
}

export default Pricing
