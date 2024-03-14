import React, { useState } from 'react'

//  https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`
function Home() {
    const APIkey = "c9a2b2a2a0f3ccb102974c44d766aeeb"
    const [city,setcity] = useState("");
    const[temp,settemp]=useState("")
    const[icon,seticon]=useState("")
    const[loading,setloading]=useState(false);

    function toCamelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toUpperCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const [error, setError] = useState(null);

    async function gettemperature() {
        settemp("")
        setloading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
            const data = await response.json();
            if (response.ok) {
                settemp(data);
            } else {
                setError("Invalid City");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError("An error occurred while fetching weather data.");
        } finally {
       setloading(false);
        }
    }
    

  return (
<div className="container">
<h2 style={{textAlign:'center'}}><i className="fa-solid fa-arrow-left" id="back"></i>Weather App</h2>
<hr/>
<section className="input-part">
    <p className="info-txt"></p>
    <div className="content">
    <input
    onChange={(e) => {
        setcity(e.target.value);

    }}
    type="text"
    id="temp"
    spellCheck="false"
    placeholder="Enter city name...."
    value={city}
    required=""
/>

        <button id="sub" onClick={gettemperature}>Get Temperature Of Location</button>
    </div>
</section>

{
    loading ? (
        <div
          className=""
          style={{
           
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          
        >
          <img
            style={{ height: "6vh" }}
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            alt=""
          />
          <p>Loading....</p>
        </div>
      ) :""}
         {error && <h3 style={{color:'red' , textAlign:"center"}}>Error: {error}</h3>}
  {  temp&& (
        <div id="main">
            <div id="weather">
                <img src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`} id="icon" alt="" />
                <h1>{temp.main.temp}&deg;C</h1>
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{toCamelCase(temp.weather[0].description)}</h3>

                </div>
                <hr/>
                <div className="bottom">
                    <div className="column">
                        <i className="fa-solid fa-temperature-quarter"></i>
                        <div className="details">
                            <div className="temp">
                                <span className="numb-2"></span>
                            </div>
                            <p>Wind Speed</p>
                            <p style={{textAlign:"center", fontWeight:"normal"}}>{temp.wind.speed}Km/h</p>
                        </div>
                    </div>
                    <div className="column right">
                        <i className="fa-solid fa-temperature-quarter"></i>
                        <div className="details">
                            <span className="humidi"></span>
                            
                            <p>Humidity</p>
                            <p style={{textAlign:"center", fontWeight:"normal"}}>{temp.main.humidity}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

    
</div>



    







  )
}

export default Home