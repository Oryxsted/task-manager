import { useState } from "react";
import React from 'react';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from "react-redux";

/**
 * 
 * @returns Компонент навигации по вкладкам
 */
 const LeftNavigation = () => {

    const [currentItem, setCurrent] = useState(0); // Выбранный элемент
    const [isListOpened, toggleListOpened] = useState(true); // Открыт ли список

    const disp = useDispatch();    
    
    const openPopup = () => {
        disp({type:"OPEN_POPUP"});
        disp({type:"SET_POPUP_TITLE", payload: "Добавить вкладку"});
        disp({type:"SET_POPUP_CONTENT", payload: "addNewTab"});
    }    
    
    const tabsList = useSelector(state => state.tabs.list);
    
    const selectTab = (tabName) => {        
        let changedTabs =  tabsList.map( (item) => {
            item.isActive = (item.name === tabName) ? true : false;
            return item;
        });        
        
        disp({type:"EDIT_TABS", payload: changedTabs});
    }


    return (
        <div className="left__navigation">
            <div className="nav__header">
                <h3>Вкладки</h3>
                <div className="right__block">                    
                    <IconButton 
                        className={"control__icon"} 
                        disableRipple="true" 
                        onClick={() => { openPopup() }}
                        sx={{p: 0}}>
                            <AddIcon sx={{fontSize: 20}}></AddIcon>
                    </IconButton>

                    <IconButton 
                        className={"control__icon " + (isListOpened ? "" : "rotated")} 
                        disableRipple="true" 
                        onClick={() => {toggleListOpened(!isListOpened)}} 
                        sx={{p: 0}}>
                            <KeyboardArrowDownIcon sx={{fontSize: 20}}></KeyboardArrowDownIcon>
                    </IconButton>
                </div>
                
            </div>
            <div className={"nav__body " + (isListOpened ? 'opened' : '')}>
                <ul>                    
                    {tabsList.map((item, index) => {
                        let additionalClass = (index === currentItem) ? " current" : "";
                        return (
                            <li className={"leftnav__item" + additionalClass} onClick={ () => { setCurrent(index);selectTab(item.name)} }>{item.name}</li>
                            
                        );
                    })}
                </ul>
            </div>                   
        </div>

    );
 }
 export default LeftNavigation;