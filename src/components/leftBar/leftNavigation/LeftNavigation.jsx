import { useState } from "react";
import React from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * 
 * @returns Компонент навигации по вкладкам
 */
 const LeftNavigation = () => {

    const [currentItem, setCurrent] = useState(0); // Выбранный элемент
    const [isListOpened, toggleListOpened] = useState(true); // Открыт ли список

    let items = ['Рабочие проекты', '345'];
    

    return (
        <div className="left__navigation">
            <div className="nav__header">
                <h3>Вкладки</h3>
                <div className="right__block">                    
                    <IconButton 
                        className={"control__icon"} 
                        disableRipple="true" 
                        sx={{p: 0}}>
                            <AddIcon sx={{fontSize: 20}}></AddIcon>
                    </IconButton>
                    <IconButton 
                        className={"control__icon " + (isListOpened ? "" : "rotated")} 
                        disableRipple="true" 
                        onClick={() => {toggleListOpened(!isListOpened)}} 
                        sx={{p: 0}}>
                            <KeyboardArrowDownIcon   sx={{fontSize: 20}}></KeyboardArrowDownIcon>
                    </IconButton>
                </div>
                
            </div>
            <div className={"nav__body " + (isListOpened ? 'opened' : '')}>
                <ul>
                    {items.map((item, index) => {
                        let additionalClass = (index === currentItem) ? " current" : "";
                        return (
                            <li className={"leftnav__item" + additionalClass} onClick={ () => { setCurrent(index)} }>{item}</li>
                            
                        );
                    })}
                </ul>
            </div>                        
        </div>
    );
 }
 export default LeftNavigation;