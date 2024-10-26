// import { weatherFetchData } from "../Fetch-Weather-Hook/weatherData"
// import { useState, useEffect } from "react";

// export const weatherHook = () => {

//   const { urlBase, API_KEY } = weatherFetchData ();
//   const [city, setCity] = useState('')
//   const [dataWeather, setDataWeather] = useState(null)

//   const fetchWeather = async () => {
//         try{
//           const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
//           const data = await response.json()
//           setDataWeather(data)
//         }catch(error){
//           console.error('The following problem occurs: ',error)
//         }
//       }

//       useEffect(() => {
//         fetchWeather (urlBase)
//           .then ( (response) => response.json())
//           .then ((city) => setCity(city))
//       }, [urlBase])
      
//   return {
//     dataWeather,
//   };
  
// }
