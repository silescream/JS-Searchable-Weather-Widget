import  {fetchWeather} from "./fetchweather.js";
import  {showCurrentWeather} from "./showCurrentWeather.js";
import  {showForecastWeather} from "./showForecastWeather.js";

const cityInput = document.querySelector('.search__input');
const cross = document.querySelector('.search__cross');
const error = document.querySelector('.search__error');

let city = 'kyiv';
let key = "782188bb400dad7217f784982218f36f";
let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;

cityInput.addEventListener('keydown', (e) => {
    if(e.keyCode == 13) {
    city = cityInput.value.trim();
    if (city !== '' && city !== ' ' && !/\d/.test(city)){
    error.style.display = 'none';
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    fetchWeather(weatherUrl , showCurrentWeather);
    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
    fetchWeather(forecastUrl, showForecastWeather);
    } else {
      error.style.display = 'block';
    }
    }
});

cross.addEventListener('click', () => {
  cityInput.value = '';
});

fetchWeather(weatherUrl, showCurrentWeather);
fetchWeather(forecastUrl, showForecastWeather);



