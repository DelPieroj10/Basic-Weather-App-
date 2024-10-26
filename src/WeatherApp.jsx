import { useState } from 'react'
import './Style Weather app/Weather_App.css'

function WeatherApp() {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '1e698338608e3e6efc9028d91b004839'
    const difKelvin = 273.15

    const [city, setCity] = useState('')
    const [dataWeather, setDataWeather] = useState(null)

    const handleChangeCity = (e) => {
      setCity(e.target.value) 
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(city.length > 0) fetchWeather()
    }

    const fetchWeather = async () => {
      try{
        const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
        const data = await response.json()
        setDataWeather(data)
      }catch(error){
        console.error('The following problem occurs: ',error)
      }
    }

  return (
    <div className='container'>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={city}
        onChange={handleChangeCity} 
        />
        <button className='search_button' type='submit'>Search</button>
      </form>
      {
        dataWeather && (
          <div>
            <h2>{dataWeather.name}</h2>
            <p>Temperature: {parseInt(dataWeather?.main?.temp - difKelvin)}°C</p>
            <p>Meteorological Condition: {dataWeather.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}/>
          </div>
        )
      }
    </div>
  )
}

export default WeatherApp

// This component works very well.
