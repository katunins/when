import {Route, Routes} from 'react-router-dom';
import NewWhere from '../pages/new';
import React from 'react';
import SetPeriods from '../pages/setPeriods';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<NewWhere/>}/>
    <Route path="/set-period" element={<SetPeriods/>}/>
  </Routes>
)

export default AppRoutes
