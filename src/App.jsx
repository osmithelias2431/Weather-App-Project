import './App.css'
import WeatherSearch from './components/WeatherSearch'

  function App() {
  return (
    <>
      <WeatherSearch weather={{ icon: 'https://example.com/icon.png' }} />
    </>
  )
}

export default App
