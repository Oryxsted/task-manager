import React, { useEffect, useState } from 'react';
import * as workerTimers from 'worker-timers';
import { Button, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/PlayArrow';


const Timer = () => {

    let workInterval = 10 * 60;
    let chillInterval = 5 * 60;

    const pomLen = 12; // Количество Помидорок (интервалов)
    const [currentPoms, setPoms] = useState(0); // Сколько помидорок отработано
    const [timer, setTime] = useState(workInterval); // Состояние таймера в секундах

    let [isTimerOn, turnTimer] = useState(false); // Таймер вкл или выкл
    let [isWorkingTime, turnWork] = useState(true); // Рабочее время или перерыв
    const [timeWorked, countWorkedTime] = useState(0);


    
    /**
    Переключение таймера
    */
    function toggleCounting() {
        turnTimer(isTimerOn = !isTimerOn);   
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


    /*****
    Обратный таймер с помидоркой
    *****/
   const tick = () => {
        if (isTimerOn) {

            if (timer === 0) {
                if (isWorkingTime) {
                    setTime(chillInterval);
                    setPoms(currentPoms => currentPoms + 1);
                }
                else {
                    setTime(workInterval);
                }
                turnWork(isWorkingTime = !isWorkingTime);
            }
            setTime(timer => timer - 1);
                if (isWorkingTime) {
                    countWorkedTime(timeWorked => timeWorked + 1);
                }
                
        }
   };
   

    React.useEffect(() => {
    const timerID = workerTimers.setTimeout(() => tick(), 1000);
    ;
    return () => workerTimers.clearTimeout(timerID);
   }, [isTimerOn, timer]);
/** 
    React.useEffect(() => {
        let interval = null;
        if (isTimerOn) {

            if (timer === 0) {
                if (isWorkingTime) {
                    setTime(chillInterval);
                    setPoms(currentPoms => currentPoms + 1);
                }
                else {
                    setTime(workInterval);
                }
                turnWork(isWorkingTime = !isWorkingTime);
            }
            interval = setTimeout(() => {
                setTime(timer => timer - 1);
                if (isWorkingTime) {
                    countWorkedTime(timeWorked => timeWorked + 1);
                }
            }, 1000);

        } else if (!isTimerOn && timer !== 0) {
            clearTimeout(interval);
        }
        return () => clearTimeout(interval);
    }, [isTimerOn, timer]);
    */
    
    return (
        <div className='timer__wrap'>
            <div className='timer__counter'><span>{showTimer(timer, ['min', 'sec'])}</span></div>
            <h3>{currentPoms} из {pomLen} интервалов </h3>
            <h4>Всего отработано за сегодня: {showTimer(timeWorked, ['hour', 'min', 'sec'])}</h4>
            <h3>{isWorkingTime ? 'Работа' : 'Перерыв'}</h3>

            <Button onClick={toggleCounting} variant="contained">{isTimerOn ? 'Стоп' : 'Старт'}</Button>
            <IconButton onClick={toggleCounting} color="primary" variant="contained">                

                <PlayArrowIcon />   

            </IconButton></div>
    );
}

export default Timer;