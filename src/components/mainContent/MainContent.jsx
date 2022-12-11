import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddTaskButton from './AddTaskButton';

/**
 * 
 * @returns Основной контент
 */
 const MainContent = () => {    

   // const disp = useDispatch();
    
    const tabsList = useSelector(state => state.tabs.list);  
    
    let activeTab = tabsList.find((item) => {return (item.isActive)});

    return (
        <div className='main__content'>    
            <h2>{activeTab.name}</h2>
            {activeTab.content.description}
            
            <AddTaskButton></AddTaskButton>            
            

        </div>
        
    );
 }
 export default MainContent;