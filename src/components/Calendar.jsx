import React from 'react';
import  { getDayName, getMonthName } from '../functions/dateLabels';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
/**
 * 
 * @returns Компонент таймера
 */
 const Calendar = () => {
    let today = new Date();

    return (
        <div className='top__calendar'>{getDayName(today.getDay())}, {today.getDate()} {getMonthName(today.getMonth())} <CalendarMonthIcon sx={{ fontSize: 14 }}/></div>
    );
 }
 export default Calendar;