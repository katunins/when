import {Paper, Typography} from '@mui/material';
import React from 'react';
import DayLine from '../components/dayLine/dayLine';

const SetPeriods: React.FC = () => {
  return (

    <Paper className={'container'}>

      <Typography variant="h3" component="h2">
        Задать период
      </Typography>

      <DayLine/>

    </Paper>
  )
}

export default SetPeriods
