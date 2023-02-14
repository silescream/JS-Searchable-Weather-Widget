export function fetchWeather (url, weatherMethod, error) {
  
    fetch(url)
      .then(resp => {
        if(!resp.ok) throw new Error(resp.statusText); 
        return resp.json(); 
      })
      .then(data => {
        weatherMethod(data);
      })
      .catch(console.error);
}
