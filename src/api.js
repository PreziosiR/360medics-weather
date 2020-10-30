const API_KEY = 'd3e39ab76a68e001cf679567c4128e02'

export default getWeather = async () => {
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
      .then( res => res.json())
      .then(data => data)
      setWeather({
        data: apiData
      }
      )   
}