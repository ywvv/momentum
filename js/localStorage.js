function setLocalStorage() {
    const name = document.querySelector('.name');
    const city = document.querySelector('.city');
    const time = document.querySelector('.checkbox-input-time');

    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('time', time.checked)
}

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        const name = document.querySelector('.name');
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        const city = document.querySelector('.city');
        city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('time') == false) {
        const time = document.querySelector('.checkbox-input-time');
        time.checked = false;
    }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);