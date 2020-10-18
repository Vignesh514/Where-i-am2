function  getweather(){    
                
    navigator.geolocation.getCurrentPosition(async(position) => {
    
        const lat = position.coords.latitude.toFixed(2)
        const lon = position.coords.longitude.toFixed(2)
        //const latfixed = lat.toFixed(2)
        //const lonfixed = lon.toFixed(2)
  //weather API fetch 
  const api_url = `http://api.weatherapi.com/v1/current.json?key=da790213e40641fa82553203201810&q=${lat},${lon}`
  const response = await fetch(api_url)
  const json = await response.json();
  console.log(json)
//weather API fetch
        document.getElementById('location').textContent = json.location.name
        document.getElementById('temp').textContent = json.current.temp_c
        document.getElementById('condition').textContent = json.current.condition.text
        document.getElementById('winddir').textContent = json.current.wind_dir
        document.getElementById('rain').textContent = json.current.precip_mm
       // document.getElementById('icon') = json.current.condition.icon
    })
}

setInterval(getweather,1000)