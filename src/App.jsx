import './App.css'
import WeatherSearch from './components/WeatherSearch'

  function App() {
  return (
    <>
    <div className="background-image"></div>
    <WeatherSearch weather={{ icon: 'https://example.com/icon.png' }} />
    </>
  )
}

export default App
