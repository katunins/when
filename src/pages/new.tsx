import React, {useEffect, useState} from 'react';
import {Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import {periods, periodTypes} from '../config';
import {DesktopDatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import dayjs, {Dayjs} from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

interface IState {
  period?: keyof periodTypes
  theme: string,
  customDate: Dayjs | null
}

const NewWhere:React.FC = () => {

  const [state, setState] = useState<IState>({theme: '', customDate: null});

  const onPeriodChange = (e: React.ChangeEvent<HTMLInputElement>, period: string) =>
  setState(prevState => ({
      ...prevState,
    period
    }))

  const handleDateChange = (customDate: Dayjs | null) => {
    setState(prevState => ({
      ...prevState,
      customDate
    }));
  };

  const types = Object.keys(periods);

  return (

    <Paper className={'container'}>

      <Typography variant="h3" component="h2">
        Запланировать созвон
      </Typography>

      <FormControl>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={state.period}
          onChange={onPeriodChange}
          sx={{margin: '60px'}}
        >
          {types.map(key =>
            <FormControlLabel key={key}
                              value={key} control={<Radio/>}
                              label={periods[key]}/>)}
        </RadioGroup>
        {state.period === 'CUSTOM_DATE' && <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="День созвона"
            inputFormat="DD/MM/YYYY"
            value={state.customDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>}

        <TextField
          sx={{marginBottom: '15px'}}
          label={'Тема созвона'} maxRows={1} value={state.theme}
          onChange={(event) =>
            setState(prevState => ({
              ...prevState,
              theme: event.target.value
            }))}/>

        <Button size="large" variant={'contained'}>Создать</Button>

      </FormControl>
    </Paper>
  )
}

export default NewWhere;
