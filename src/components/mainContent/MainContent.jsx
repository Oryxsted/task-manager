import React from 'react';
import {useDispatch, useSelector} from "react-redux";

/**
 * 
 * @returns Основной контент
 */
 const MainContent = () => {    

    const disp = useDispatch();
    const cash = useSelector(state => state.cash.cash);  
    const tabsList = useSelector(state => state.tabs.list);  
    let activeTab = tabsList.find((item) => {return (item.isActive)});

    const addCash = () => {
        disp({type:"ADD_CASH", payload: 5});
    }

    const getCash = () => {
        disp({type:"GET_CASH", payload: 5});
    }
       
    return (
        <div className='main__content'>
            <h1>{cash}</h1>
            <button onClick={() => addCash()}>+1</button>
            <button onClick={() => getCash()}>-1</button>     
            <h2>{activeTab.name}</h2>
            {activeTab.content}


        </div>
        
    );
 }
 export default MainContent;