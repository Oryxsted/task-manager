import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
/**
 * 
 * @returns Форма добавления вкладки
 */
const AddNewTab = () => {     
    const disp = useDispatch();
    const [tabName, setTabName] =  useState('');    

    const close = () => {
        disp({type:"CLOSE_POPUP"});
    }

    const addNewTab = (tabName) => {
        let newTab = {name: tabName, content: '123', isOpened: false};

        disp({type:"ADD_NEW_TAB", payload: newTab});
    }

    return (
        <div>            
            <div>
                <h3>Добавить вкладку {tabName}</h3>
                <input type="text" value={tabName} onChange={ (e) => {setTabName(e.target.value)}}></input>
                <button onClick={() => { close(); }}>Отмена</button>
                
                <button onClick={() => { addNewTab(tabName); close();}}>Добавить</button>
            </div>
        </div>
    )
}

export default AddNewTab
