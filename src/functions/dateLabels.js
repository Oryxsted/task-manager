/**
 * Возвращает название дня недели по номеру, начинается с воскресения
 * @param {*} num порядковый номер дня недели (напр. 0 - воскресение)
 * @returns Сокращенное наименование дня недели
 */
export function getDayName(num) {
    let result = 'Сегодня';
    switch(num) {
        case 0:
            result = 'Вс'; 
            break;          
        case 1:
            result = 'Пн';
            break;
        case 2:
            result = 'Вт';
            break;
        case 3:
            result = 'Ср';
            break;
        case 4:
            result = 'Чт';
            break;
        case 5:
            result = 'Пт';
            break;
        case 6:
            result = 'Сб';                         
            break;
    }
    return result;
}


/**
 * Возвращает название месяца в родительном падеже
 * @param {*} num порядковый номер месяца, начиная с 0
 * @returns название месяца в родительном падеже
 */
export function getMonthName(num) {
    let result = 'Месяц';
    
    switch(num) {
        case 0:
            result = 'января';
            break;            
        case 1:
            result = 'февраля';
            break;
        case 2:
            result = 'марта';
            break;
        case 3:
            result = 'апреля';
            break;
        case 4:
            result = 'мая';
            break;
        case 5:
            result = 'июня';
            break;
        case 6:
            result = 'июля';     
            break;
        case 7:
            result = 'августа'; 
            break;
        case 8:
            result = 'сентября'; 
            break;
        case 9:
            result = 'октября'; 
            break;
        case 10:
            result = 'ноября'; 
            break;
        case 11:
            result = 'декабря';                     
            break;
    }
    return result;
}