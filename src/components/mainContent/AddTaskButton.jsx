import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

/**
 * 
 * @returns Кнопка создания задачи
 */
 const AddTaskButton = () => {    

   // const disp = useDispatch();
    

    return (

            <div>
                <button className='add__task' onClick={() => {} }>
                <IconButton 
                        className={"control__icon"} 
                        disableRipple="true" 
                        onClick={() => { }}
                        sx={{p: 0}}>
                            <AddIcon sx={{fontSize: 20}}></AddIcon>
                </IconButton>

                    Добавить задачу</button>
            </div>
            
        
    );
 }
 export default AddTaskButton;