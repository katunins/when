import React from 'react';
import {Box, Button} from '@mui/material';
import './dayLine.css'

interface IDayLine {

}

const DayLine:React.FC<IDayLine> = ()=> {
  return (
    <div className='container'>
      {[1,2,3,4].map((item, index)=>
        <Box className='day-pin' sx={{background: 'red'}}/>)}
    </div>
  )
}

export default DayLine
