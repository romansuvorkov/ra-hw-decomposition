import React from 'react';

/**
 * Компонент для рендеринга прогноза погоды
 */

function Weather(props) {

  return (
    <div className="weather_wrapper">
      <img src={props.url}/>
      <span>{props.temperature}</span>
      <span>{props.morningTemperature}</span>
      <span>{props.dayTemperature}</span>
    </div>
  );

}

export default Weather;