const settingsBtn = document.querySelector('.settings-btn');
const settingsTitle = document.querySelector('.settings-title');
const settingsImagesTitle = document.querySelector('.images-api-title');
const settingsLangTitle = document.querySelector('.languages-title');
const settingsShowTitle = document.querySelector('.show-title');
const showLabelTextTime = document.querySelector('.show-label-text-time');
const showLabelTextDate = document.querySelector('.show-label-text-date');
const showLabelTextGreeting = document.querySelector('.show-label-text-greeting');
const showLabelTextQuotes = document.querySelector('.show-label-text-quotes');
const showLabelTextWeather = document.querySelector('.show-label-text-weather');
const showLabelTextPlayer = document.querySelector('.show-label-text-player');
const showLabelTextTodo = document.querySelector('.show-label-text-todo');


const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting-container');
const quotes = document.querySelector('.quotes');
const weather = document.querySelector('.weather');
const player = document.querySelector('.player');
const todo = document.querySelector('.todo');

const timeCheckbox = document.getElementById('time-checkbox');
const dateCheckbox = document.getElementById('date-checkbox');
const greetingCheckbox = document.getElementById('greeting-checkbox');
const quotesCheckbox = document.getElementById('quotes-checkbox');
const weatherCheckbox = document.getElementById('weather-checkbox');
const playerCheckbox = document.getElementById('player-checkbox');
const todoCheckbox = document.getElementById('todo-checkbox');


function toggleLang() {
    if (language == 'ru') {
        settingsTitle.textContent = 'Настройки';
        settingsLangTitle.textContent = 'Язык';
        settingsImagesTitle.textContent = 'Картинки';
        settingsShowTitle.textContent = 'Показать';
        showLabelTextTime.textContent = 'Время';
        showLabelTextDate.textContent = 'Дата';
        showLabelTextGreeting.textContent = 'Приветствие';
        showLabelTextQuotes.textContent = 'Цитаты';
        showLabelTextWeather.textContent = 'Погода';
        showLabelTextPlayer.textContent = 'Плеер';
        showLabelTextTodo.textContent = 'Cписок дел'
        todoTitle.textContent = 'Список Дел';
        newTodoBtn.textContent = 'Добавить';
        clearBtn.textContent = 'Очистить';
        newTodo.placeholder = '[Добавь задачу]'
        currentCity.placeholder = '[Введите город]';

    } else {
        settingsTitle.textContent = 'Settings';
        settingsLangTitle.textContent = 'Language';
        settingsImagesTitle.textContent = 'Images';
        settingsShowTitle.textContent = 'Show';
        showLabelTextTime.textContent = 'Time'
        showLabelTextDate.textContent = 'Date';
        showLabelTextGreeting.textContent = 'Greeting';
        showLabelTextQuotes.textContent = 'Quotes';
        showLabelTextWeather.textContent = 'Weather';
        showLabelTextPlayer.textContent = 'Player';
        showLabelTextTodo.textContent = 'To Do List'
        todoTitle.textContent = 'To Do List';
        newTodoBtn.textContent = 'Add';
        clearBtn.textContent = 'Clear';
        newTodo.placeholder = '[Add task]';
        currentCity.placeholder = '[Enter City]';
    }
}

let settingsMenu = document.querySelector('.settings-menu');
let settingsBtnDeg = 0;
let showSetting = false;

settingsBtn.addEventListener('click', () => {
    settingsBtnDeg += 180;
    settingsBtn.style.transform = `rotate(${settingsBtnDeg}deg)`;
    if (showSetting == false) {
        settingsMenu.classList.add('settings-menu2');
        settingsTitle.classList.add('settings-title2');
        settingsTitle.style.opacity = '0';
        showSetting = true;
    } else {
        settingsMenu.classList.remove('settings-menu2');
        settingsTitle.classList.remove('settings-title2');
        settingsTitle.style.opacity = '1';
        showSetting = false;
    }
});

function hideTime() {
    if (timeCheckbox.checked) {
        time.style.opacity = '1';
    } else {
        time.style.opacity = '0';
    }
}

function hideDate() {
    if (dateCheckbox.checked) {
        date.style.opacity = '1';
    } else {
        date.style.opacity = '0';
    }
}

function hideGreeting() {
    if (greetingCheckbox.checked) {
        greeting.style.opacity = '1';
    } else {
        greeting.style.opacity = '0';
    }
}

function hideQuotes() {
    if (quotesCheckbox.checked) {
        quotes.style.opacity = '1';
    } else {
        quotes.style.opacity = '0';
    }
}

function hideWeather() {
    if (weatherCheckbox.checked) {
        weather.style.opacity = '1';
    } else {
        weather.style.opacity = '0';
    }
}

function hidePlayer() {
    if (playerCheckbox.checked) {
        player.style.opacity = '1';
    } else {
        player.style.opacity = '0';
    }
}

function hideTodo() {
    if (todoCheckbox.checked) {
        todo.style.opacity = '1';
    } else {
        todo.style.opacity = '0';
    }
}

timeCheckbox.addEventListener('click', hideTime)
dateCheckbox.addEventListener('click', hideDate)
greetingCheckbox.addEventListener('click', hideGreeting)
quotesCheckbox.addEventListener('click', hideQuotes)
weatherCheckbox.addEventListener('click', hideWeather)
playerCheckbox.addEventListener('click', hidePlayer)
todoCheckbox.addEventListener('click', hideTodo)
buttonEng.addEventListener("click", toggleLang);
buttonRu.addEventListener("click", toggleLang);
buttonEng.addEventListener("click", getWeather);
buttonRu.addEventListener("click", getWeather);