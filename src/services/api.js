const API_KEY = import.meta.env.API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const GEO_URL = "https://api.api-ninjas.com/v1/geocoding"
const GEO_API_KEY = import.meta.env.GEO_API_KEY


// Fetch geolocation data
export const fetchGeo = async (city) => {
  const response = await fetch(`${GEO_URL}?city=${city}`, {
  method: 'GET',
  headers: { "X-Api-Key": GEO_API_KEY },
  contentType: 'application/json',

});
  if (!response.ok) {
    throw new Error("Failed to fetch geo data");
  }
  const data = await response.json();
  console.log(data); // Check the browser console for output
  return data;
}

export const fetchWeather = async (city) => {
  const coordinates = await fetchGeo(city);
  const response = await fetch(`${BASE_URL}?lat=${coordinates[0].latitude}&lon=${coordinates[0].longitude}&appid=${API_KEY}`)
  if (!response.ok) {
    throw new Error("Failed to fetch weather data")
  }
  return response.json()
}
