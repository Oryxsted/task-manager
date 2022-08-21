/**
 * ОТправляет браузерное уведомление
 * @param {*} title Заголовок уведомления
 * @param {*} options Параметры уведомления
 */
export function sendNotification(title, options) {
    // Проверим, поддерживает ли браузер HTML5 Notifications
    if (!("Notification" in window)) {
    alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }
    
    // Проверим, есть ли права на отправку уведомлений
    else if (Notification.permission === "granted") {
    // Если права есть, отправим уведомление
    var notification = new Notification(title, options);
    }

    // Если прав нет, пытаемся их получить
    else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
    // Если права успешно получены, отправляем уведомление
    if (permission === "granted") {
    var notification = new Notification(title, options);
    
    } else {
    alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
    }
    });
    } else {
    // Пользователь ранее отклонил наш запрос на показ уведомлений
    }
    }
