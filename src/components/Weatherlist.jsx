import React, { useState, useEffect } from 'react'

const Wheatherlist = props => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => { const result = props.getData?.(props.weatherPlaceID).then(response => setWeatherData(response)) }, [props])
    console.log(weatherData)

    return (
        <>
        <div>
            <ul>
                {
                    weatherData === null
                    ? <p>now loading...</p>
                    : weatherData.data.items.map(x => 
                        <>
                        <li>{x.volumeInfo.title}</li>
                        <li> <img src={x.volumeInfo.imageLinks.smallThumbnail} alt=""/> </li>
                        </>
                    )
                }
            </ul>
        </div>
        </>
    )
}

export default Wheatherlist