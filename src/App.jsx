import './App.css'
import WeatherDisplay from './components/WeatherDisplay'

  function App() {

  const handleSearch = () => {

  }
  return (
    <>
    <div className="background-image"></div>
    <form onSubmit={handleSearch} className="form">
      <input type="text" placeholder="Search for a city..." />
      <button type="submit" className="search-button">Search</button>
    </form>
    <WeatherDisplay display={{}} />
    </>
  )
}

export default App
