let language = 'eng';
let buttonRu = document.querySelector('.ru');
let buttonEng = document.querySelector('.eng');



function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    time.textContent = currentTime;

    showGreeting();
    showDate();
    setTimeout(showTime, 50);
}

function showDate() {
    const date = document.querySelector('.date');
    const date2 = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    let currentDate
    currentDate = date2.toLocaleDateString('eng-US', options);
    if (language == 'ru') {
        currentDate = date2.toLocaleDateString('ru-RU', options);
    }
    date.textContent = currentDate;
}

function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const name = document.querySelector('.name')
    const timeOfDay = getTimeOfDay();
    const timeOfDayRu = getTimeOfDayRu();
    let greetingTranslation = {
        eng: `Good ${timeOfDay}`,
        ru: `${timeOfDayRu}`
    };
    if (language == 'ru') {
        greeting.textContent = greetingTranslation.ru;
        name.placeholder = '[Введите имя]';
    } else {
        greeting.textContent = greetingTranslation.eng;
        name.placeholder = '[Enter your name]';
    }
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours <= 12) {
        return 'morning';
    } else if (hours > 12 && hours <= 17) {
        return 'afternoon';
    } else if (hours > 17 && hours <= 24) {
        return 'evening';
    } else {
        return 'night';
    }
}

function getTimeOfDayRu() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours <= 12) {
        return 'Доброе утро';
    } else if (hours > 12 && hours <= 17) {
        return 'Добрый день';
    } else if (hours > 17 && hours <= 24) {
        return 'Добрый вечер';
    } else {
        return 'Доброй ночи';
    }
}

function ru() {
    language = 'ru';
    return;
}

function eng() {
    language = 'eng';
    return;
}


showTime();
buttonRu.addEventListener("click", ru);
buttonRu.addEventListener("click", showDate);
buttonEng.addEventListener("click", eng);
buttonEng.addEventListener("click", showDate);