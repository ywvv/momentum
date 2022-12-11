const body = document.querySelector('body');
const slideNextButton = document.querySelector('.slide-next');
const slidePrevButton = document.querySelector('.slide-prev');
const flickrBtn = document.querySelector('.flickr');
const unsplashBtn = document.querySelector('.unsplash');
const githubBtn = document.querySelector('.github');

let currentBackgroundNumber = 0;
let backgroundChange = true;


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function currentBackgroundNumberControl() {
    if (currentBackgroundNumber > 20) {
        currentBackgroundNumber = 1;
    } else if (currentBackgroundNumber < 1) {
        currentBackgroundNumber = 20;
    }
    if (currentBackgroundNumber.toString().length < 2) {
        currentBackgroundNumber = "0" + currentBackgroundNumber;
    }
}

function setBg() {
    currentBackgroundNumber = getRandomNum(1, 20);
    currentBackgroundNumberControl();
    const currentDayTime = getTimeOfDay();
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentDayTime}/${currentBackgroundNumber}.jpg')`;
}
setBg();

function nextBackground() {
    if (backgroundChange) {
        backgroundChange = false;
        currentBackgroundNumber++;
        currentBackgroundNumberControl();
        const currentDayTime = getTimeOfDay();
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentDayTime}/${currentBackgroundNumber}.jpg`;
        img.onload = () => {
            body.style.backgroundImage = `url("${img.src}")`;
            setTimeout(() => {
                backgroundChange = true
            }, 1000);
        };
    } else if (flickr == true) {
        setFlickrBg();
    }
}

function prevBackground() {
    if (backgroundChange) {
        backgroundChange = false;
        currentBackgroundNumber--;
        currentBackgroundNumberControl();
        const currentDayTime = getTimeOfDay();
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${currentDayTime}/${currentBackgroundNumber}.jpg`;
        img.onload = () => {
            body.style.backgroundImage = `url("${img.src}")`;
            setTimeout(() => {
                backgroundChange = true
            }, 1000);
        };
    }
}

async function setUnsplashBg() {
    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=foGxDQRmCgNucwzfIPqH82VyCdMcNkwf8Bc3oAlSkEw';
    const res = await fetch(url);
    const data = await res.json();
    body.style.backgroundImage = `url('${data.urls.regular}')`;
    console.log(data.urls.regular)
}
async function setFlickrBg() {
    flickr = true;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c75c58378aa1469ca712d45ef06554d4&tags=nature&extras=url_l&format=json&nojsoncallback=1';
    const res = await fetch(url);
    const data = await res.json();
    let numb = getRandomNum(0, 66);
    body.style.backgroundImage = `url('${data.photos.photo[numb].url_l}')`;
    console.log(data.photos.photo[numb].url_l)
}
slideNextButton.addEventListener("click", nextBackground);
slidePrevButton.addEventListener("click", prevBackground);
unsplashBtn.addEventListener("click", setUnsplashBg);
flickrBtn.addEventListener("click", setFlickrBg);
githubBtn.addEventListener("click", setBg);