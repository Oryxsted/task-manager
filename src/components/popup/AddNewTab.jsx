import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
/**
 * 
 * @returns Форма добавления вкладки
 */
const AddNewTab = () => {     
    const disp = useDispatch();
    const [tabName, setTabName] =  useState('');   
    const [tabDesc, setTabDesc] =  useState('');    

    const close = () => {
        disp({type:"CLOSE_POPUP"});
    }

    const addNewTab = (tabName, tabDesc) => {
        let newTab = {
            name: tabName, 
            content: {
                description: tabDesc,
                todos: [
                    {
                        title: "Тестовая задача",
                        description: "Пример описания",
                        isComplete:false,
                    },
                ]
            }, 
            isOpened: false};

        disp({type:"ADD_NEW_TAB", payload: newTab});
    }

    return (
        <div>            
            <div className="addTab__form">
                
                <label> <span>Имя</span>
                    <input type="text" value={tabName} onChange={ (e) => {setTabName(e.target.value)}}></input>
                </label>
                <label> <span>Описание (необязательно)</span>
                    <input type="text" value={tabDesc} onChange={ (e) => {setTabDesc(e.target.value)}}></input>
                </label>
                <div className='buttons__row'>
                    <button className='outline' onClick={() => { close(); }}>Отмена</button>                    
                    <button className='primary' onClick={() => { addNewTab(tabName, tabDesc); close();}}>Добавить</button>
                </div>
                
            </div>
        </div>
    )
}

export default AddNewTab
