import { useEffect, useState } from "react";

const Weather = ({info}) => {
  
  return (
    <article className="curweather">
        <div className="curweather__temp">
            <img src="" alt="" className="curweather__icon" />
            <span>{info.temp_c}</span>
        </div>
        <div className="curweather__info">
            <span className="curweather__sky">{info.text}</span>
            <span className="curweather__wind">{info.wind_kph}</span>
        </div>
    </article>
  );
};

export default Weather;
