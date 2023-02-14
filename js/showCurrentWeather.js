export function showCurrentWeather (data) {

    const selectedCity = document.querySelector('.search__city');
    const currentWeather = document.querySelector('.weather__current');


    selectedCity.textContent = `${data.name}, ${data.sys.country}`;
    currentWeather.innerHTML = 
        `   <div class="current__degree-box">
                <div class="current__deegres"> ${Math.round(data.main.temp)}&#8451</div>
                <div class="current__feelslike">Feels like ${Math.round(data.main.feels_like)}&#8451</div>
            </div>
            <div class="current__description">
                <div class="current__state">${data.weather[0].main}</div>
                <div class="current__city">${data.name}, ${data.sys.country}</div>
            </div>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="current__icon">`;
} 