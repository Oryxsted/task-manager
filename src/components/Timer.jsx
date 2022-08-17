import React, { useEffect, useState } from 'react';
import * as workerTimers from 'worker-timers';
import  { sendNotification } from '../functions/notifications';
import { IconButton } from '@mui/material';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

/**
 * 
 * @returns Компонент таймера
 */
const Timer = () => {
    
    let workInterval = 25 * 60; // Интервал работы
    let chillInterval = 5 * 60; // Интервал отдыха

    const pomLen = 12; // Количество Помидорок (интервалов)
    const [currentPoms, setPoms] = useState(0); // Сколько помидорок отработано
    const [timer, setTime] = useState(workInterval); // Состояние таймера в секундах

    let [isTimerOn, turnTimer] = useState(false); // Таймер вкл или выкл
    let [isWorkingTime, turnWork] = useState(true); // Рабочее время или перерыв
    const [timeWorked, countWorkedTime] = useState(0); //Общее отработанное время
    const favicon = document.getElementById("favicon"); //Фавиконка - меняется при смене таймера    
    
    /**
    * Переключение таймера
    */
    function toggleCounting() {
        turnTimer(isTimerOn = !isTimerOn);               
    }

    /**
    * Пропуск текущего интервала таймера
    */
    function skipTimer() {

        setTime(0);            
        turnTimer(true);
    }
  

    /**
    Преобразует секунды для отображения в часах, минутах, секундах
    Минут не больше 60
   * @param {number} time Время для преобразования в секундах.
   * @param {array} n Массив параметров: 'hour', 'min', 'sec' для вывода часов, минут, секунд .
   * @return {string} Строка с отформатированным временем.
    */
    function showTimer(time, params) {
        let result = '';
        let del = ':';
        if (params.includes('hour')) {
            let hour = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
            result += hour + del;
        }
        if (params.includes('min')) {
            let minutes = Math.floor((time % 3600) / 60) < 10 ? '0' + Math.floor((time % 3600) / 60) : Math.floor((time % 3600) / 60); // То же самое для для минут
            result += minutes + del;
        }
        if (params.includes('sec')) {
            let seconds = time % 60 < 10 ? '0' + time % 60 : time % 60; // '0' в начале при менее 10 секундах
            result += seconds;
        }
        return result;
    }

    

    /**
    * Обратный таймер с помидоркой    
    */
   const tick = () => {
        if (isTimerOn) {

            // Когда таймер подходит к концу                
            if (timer === 0) { 
                if (isWorkingTime) {
                    setTime(chillInterval);
                    setPoms(currentPoms => currentPoms + 1);
                    sendNotification('Перерыв', {
                        body: 'Сегодня вы отработали ' + (currentPoms+1) +' интервалов!',                        
                        dir: 'auto'
                    });  
                }
                else {
                    setTime(workInterval);
                    sendNotification('Работа', {
                        body: 'Время очередного интервала',                        
                        dir: 'auto'
                    }); 
                }
                turnWork(isWorkingTime = !isWorkingTime);
            }

            // Убавляем обычный таймер, прибавляем общее время работы
            setTime(timer => timer - 1);
                if (isWorkingTime) {
                    countWorkedTime(timeWorked => timeWorked + 1);
                }  
        }
   };
   
   /**
    * Смена фавиконки для 4 случаев
    */
   const changeFavicon = () => {
    if (isWorkingTime) {
        if (isTimerOn) {
            favicon.href = "../img/work_play_favicon.png"; 
        }
        else {
            favicon.href = "../img/work_stop_favicon.png"; 
        }
    }
    else {
        if (isTimerOn) {
            favicon.href = "../img/chill_play_favicon.png"; 
        }
        else {
            favicon.href = "../img/chill_stop_favicon.png"; 
        }
    }
    
   }
   
    React.useEffect(() => {
        // Осущесвтляем ежесекундынй тик
        const timerID = workerTimers.setTimeout(() => tick(), 1000);
        
        // Динамически обновляем title страницы в соответствии с таймером
        let whatTimeItIs = isWorkingTime ? 'Работа' : 'Перерыв';
        document.title = showTimer(timer, ['min', 'sec']) + ' • ' + whatTimeItIs + ' — TaskManager';

        // Обновляем favicon
        changeFavicon();
        return () => workerTimers.clearTimeout(timerID);
   }, [isTimerOn, timer]);


   /**
    * 
    */
   function spaceHandler(event) {                
        // При нажатии пробела должен пойти таймер
        if (event.code == 'Space') {
            toggleCounting();
        }    
    }
    // Отслеживаем нажатие кнопок
    React.useEffect(() => {            
        document.addEventListener("keypress", spaceHandler);

        return () => document.removeEventListener("keypress",spaceHandler);
   }, []);

    
    return (
        <div className='timer__wrap'>
            <div className='timer__counter'>
                <span>{showTimer(timer, ['min', 'sec'])}</span>
                <IconButton onClick={toggleCounting} color="primary" variant="contained">                
                {isTimerOn ? <PauseCircleFilledIcon sx={{ fontSize: 50 }}/>   : <PlayCircleFilledIcon sx={{ fontSize: 50 }}/>  }
                </IconButton>
            </div>
            <div className="skip__button" onClick={skipTimer}><span>Пропустить {isWorkingTime ? 'интервал' : 'перерыв'}</span></div>
            <h3>{currentPoms} из {pomLen} интервалов </h3>
            <h4>Всего отработано за сегодня: {showTimer(timeWorked, ['hour', 'min', 'sec'])}</h4>
            <h3>{isWorkingTime ? 'Работа' : 'Перерыв'}</h3>            

        </div>
    );
}

export default Timer;