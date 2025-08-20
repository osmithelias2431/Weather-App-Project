function WeatherDisplay({display}) {
    
    return <div className="display-page">
        <div className="display-search">
            <input type="text" placeholder="Search for a city..." />
            <button className="search-button">Search</button>
        </div>
        <div>
            <h2 className="weather-location">{display.location}</h2>
            <div>
                <span className="degrees">{display.temperature}°</span>
                <div>
                    <img src={display.icon} alt="Weather icon" />
                    <h4>{display.condition}</h4>
                </div>
            </div>
        </div>
        <div>
            <p>Chance of Rain: {display.precipitation}</p>
            <p>Feels Like: {display.altTemperature}</p>
            <p>Wind: {display.wind}</p>
            <p>Humidity: {display.humidity}</p>
        </div>
    </div>
}

export default WeatherDisplay;