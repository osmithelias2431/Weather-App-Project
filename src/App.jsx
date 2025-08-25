import './App.css'
import { useState } from 'react'
import WeatherDisplay from './components/WeatherDisplay'

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
      alert(`${searchQuery}!`)
  }
  return (
    <>
    <div className="background-card">
      <div className="background-image"></div>
      <form onSubmit={handleSearch} className="form">
        <input type="text" placeholder="Search for a city..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <WeatherDisplay display={{}} />
    </div>
    </>
  )
}

export default App
