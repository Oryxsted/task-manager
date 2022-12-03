import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import AddNewTab from './AddNewTab';
/**
 * 
 * @returns Контейнер модального окна
 */
const Popup = (props) => {     

    const disp = useDispatch();
    const isOpened = useSelector(state => state.popup.isOpened);
    const title = useSelector(state => state.popup.title);  
    const content =  <AddNewTab></AddNewTab>;//useSelector(state => state.popup.content); 

    const close = () => {
        disp({type:"CLOSE_POPUP"});
    }
    

  if (isOpened) {
    return ( 
        <div className='popup__bg'>
            <div className='popup__wrapper'>
                <div className='popup__header'>
                    <h2>{title}</h2>
                </div>
                <div className='popup__content'>
                    {content}
                    
                </div>
                <span className="closeModal" onClick={() => close() }>х</span>
            </div>
            
        </div>
      )
  } else {
    return null;
  }
  
}

export default Popup
