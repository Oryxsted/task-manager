import React from 'react';
import Calendar from './Calendar';
/**
 * 
 * @returns Верхний бар
 */
 const TopBar = () => {    

    return (
        <div className='top__bar'>
            <Calendar/>
        </div>
    );
 }
 export default TopBar;