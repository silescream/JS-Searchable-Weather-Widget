export function showForecastWeather(data) {

    const forecastDay = document.querySelectorAll('.forecast__day');
    // пришлось перебирать масивы что бы получить температуру ночью и днем, так как в бесплатной версии API норм прогноза нет. 
    const arr = data.list.filter(elem => {
        return new Date(elem.dt_txt).getDay() !== new Date().getDay() ;
    });

    const day = arr.filter((elem, idx) => {
      return elem.dt_txt.includes("12:00:00") || idx === arr.length - 1;
    });

    const night = arr.filter(elem => {
      return elem.dt_txt.includes("00:00:00");
    });
    
     forecastDay.forEach((e, idx) => {
        e.innerHTML = `<div class="forecast__weekday">${weekDayConvertor(day[idx].dt_txt)}</div>
        <img src="http://openweathermap.org/img/wn/${day[idx].weather[0].icon}@2x.png" alt="" class="forecast__icon">
        <div class="forecast__state">${day[idx].weather[0].description}</div>
        <div class="forecast__deegree-box">
            <div class="forecast__degree-min">${Math.round(night[idx].main.temp_min)}&#8451</div>
            <div class="forecast__degree-max">${Math.round(day[idx].main.temp_max)}&#8451</div>
        </div>`;
    }); 

}
function weekDayConvertor(day) {
    switch (new Date(day).getDay()) {
        case 0:
          return "SUN";
          
        case 1:
          return "MON";
          
        case 2:
           return "TUE";
          
        case 3:
          return "WED";
          
        case 4:
          return "THU";
        
        case 5:
          return "FRI";
          
        case 6:
          return "SAT";
      }
}