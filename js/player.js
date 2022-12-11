import playList from './playList.js';

const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playPrevButton = document.querySelector('.play-prev');

const playlistContainer = document.querySelector('.play-list');

playList.forEach((track) => {
    const item = document.createElement('li');
    item.textContent = track.title;
    item.classList = 'play-item';
    playlistContainer.append(item);

    const music = document.createElement('audio');
    music.src = track.src;
    music.classList = 'audio-track';
    playlistContainer.append(music);
});

function crateMainAudio() {
    const music = document.createElement('audio');
    music.src = playList[0].src;
    music.classList = 'main-audio-track';
    playlistContainer.append(music);
}
crateMainAudio();

const trackNamesCollection = document.querySelectorAll('.play-item');
const tracksCollection = document.querySelectorAll('.audio-track');
const mainAudio = document.querySelector('.main-audio-track');
const bars = document.querySelectorAll('.range');
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const volumeButton = document.querySelector('.volume');

const currentTimeText = document.querySelector('.audio-current-time');
const durationTimeText = document.querySelector('.audio-duration');
const bigSongNameText = document.querySelector('.song-name');

let isPlaying = false;
let currentTrack = 0;
let previousVolumeValue = 1;

function insertSongName() {
    bigSongNameText.textContent =
        trackNamesCollection[currentTrack].textContent;
}
function insertDuration() {
    durationTimeText.textContent = playList[currentTrack].duration;
}

function insertCurrentTime() {
    let time = [];
    time.push(Math.floor(mainAudio.currentTime / 60));
    time.push(Math.floor(mainAudio.currentTime) - time[0] * 60);
    time = time.map((t) => {
        if (t < 10) {
            t = '0' + t;
        }
        return t;
    });
    currentTimeText.textContent = time.join(':');
}

function playMusic() {
    isPlaying = true;
    mainAudio.src = tracksCollection[currentTrack].src;
    mainAudio.play();
    trackNamesCollection[currentTrack].classList.add('item-active');
    trackNamesCollection[currentTrack].classList.add('item-active2');
    playButton.classList.add('pause');
    insertDuration();
    insertSongName();
}

function pauseMusic() {
    isPlaying = false;
    mainAudio.pause();
    playButton.classList.remove('pause');
    mainAudio.currentTime = 0;
}

function playButtonInteract() {
    if (isPlaying) pauseMusic();
    else playMusic();
}

function nextButtonInteract() {
    pauseMusic();
    trackNamesCollection[currentTrack].classList.remove('item-active');
    trackNamesCollection[currentTrack].classList.remove('item-active2');
    currentTrack++;
    infiniteList();
    playMusic();
}

function prevButtonInteract() {
    pauseMusic();
    trackNamesCollection[currentTrack].classList.remove('item-active');
    trackNamesCollection[currentTrack].classList.remove('item-active2');
    currentTrack--;
    infiniteList();
    playMusic();
}

function infiniteList() {
    if (currentTrack < 0) {
        currentTrack = trackNamesCollection.length - 1;
    }
    if (currentTrack >= trackNamesCollection.length) {
        currentTrack = 0;
    }
}

function changeTrackOnEnd() {
    if (mainAudio.currentTime == mainAudio.duration) {
        setTimeout(() => {
            nextButtonInteract();
        }, 500);
    }
}

function sliderColorize(e) {
    const value =
        ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
    e.target.style.background = `linear-gradient(to right, white 0%, white ${value}%, grey ${value}%, grey 100%)`;
}

function volumeBarController(e) {
    mainAudio.volume = volumeBar.value / 100;
    sliderColorize(e);
}

function progressBarController(e) {
    mainAudio.currentTime = (mainAudio.duration * progressBar.value) / 100;
    sliderColorize(e);
}

function progressBarColorizer(e) {
    progressBar.value = (mainAudio.currentTime / mainAudio.duration) * 100 || 0;
    progressBar.style.background = `linear-gradient(to right, white 0%, white ${progressBar.value}%, grey ${progressBar.value}%, grey 100%)`;
}

function volumeIconChange() {
    if (volumeButton.classList.contains('mute'))
        volumeButton.classList.remove('mute');
    else {
        volumeButton.classList.add('mute');
    }
}

function volumeSwitch() {
    if (mainAudio.volume) {
        previousVolumeValue = mainAudio.volume;
        mainAudio.volume = 0;
        volumeBar.value = 0;
        volumeIconChange();
    } else {
        mainAudio.volume = previousVolumeValue;
        volumeBar.value = previousVolumeValue * 100;
        volumeIconChange();
    }
    volumeBar.style.background = `linear-gradient(to right, white 0%, white ${volumeBar.value}%, grey ${volumeBar.value}%, grey 100%)`;
}

function checkVolumeValue() {
    if (mainAudio.volume == 0) {
        volumeButton.classList.add('mute');
    } else {
        volumeButton.classList.remove('mute');
    }
}


playButton.addEventListener('click', playButtonInteract);
playNextButton.addEventListener('click', nextButtonInteract);
playPrevButton.addEventListener('click', prevButtonInteract);

mainAudio.addEventListener('timeupdate', progressBarColorizer);
mainAudio.addEventListener('timeupdate', insertCurrentTime);
mainAudio.addEventListener('timeupdate', changeTrackOnEnd);

progressBar.addEventListener('input', progressBarController);

volumeBar.addEventListener('input', volumeBarController);
volumeBar.addEventListener('input', checkVolumeValue);
volumeButton.addEventListener('click', volumeSwitch);
