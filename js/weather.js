const weatherIcon = document.querySelector('.weather-icon');
const weatherTemperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const currentCity = document.querySelector('.city');
const currentCityError = document.querySelector('.weather-error');


async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&lang=${language}&appid=99732b6c59dfcc7d645989d0eebec457&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (currentCity.value == ""){
    weatherIcon.className = "";
    weatherTemperature.textContent = "";
    weatherDescription.textContent = "";
    weatherWind.textContent = "";
    weatherHumidity.textContent = "";
    if (language == 'ru'){
      currentCityError.textContent = 'Пожалуйста, введите город';
      // getWeather();
    } else {
      currentCityError.textContent = 'Please, enter a city';
    }
  }
  if (data.cod != 404) {
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherTemperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (language == 'ru'){
      currentCity.placeholder = '[Введите город]';
      weatherWind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      weatherHumidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
    } else {
      currentCity.placeholder = '[Enter City]';
      weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      weatherHumidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    }
    currentCityError.textContent = "";
  } else {
    weatherIcon.className = "";
    weatherTemperature.textContent = "";
    weatherDescription.textContent = "";
    weatherWind.textContent = "";
    weatherHumidity.textContent = "";
    currentCityError.textContent = `Error! Сity not found!`;
  }
  // getWeather();
}
getWeather();
currentCity.addEventListener("change", getWeather);
