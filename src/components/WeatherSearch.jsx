function WeatherSearch({weather}) {

    function clickSearch() {
        alert("Clicked!");
    }

    return <div className="weather-search">
        <h2 className="weather-title">Weather Now</h2>
        <div className="weather-icon">
            <img src={weather.icon} alt="Weather Icon" />
            <div className="search">
                <input type="text" placeholder="Search for a city..." />
                <button className="search-button" onClick={clickSearch}>
                    Search
                </button>
            </div>
        </div>
    </div>
}

export default WeatherSearch;