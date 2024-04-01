// import React from "react";
/* eslint-disable react/prop-types */
import "./Place.css";
const Place = ({ place }) => {
  return (
    <li className="yakutsk__place-wrapper">
      <div className="yakutsk__img-wrapper">
        <img src={place.image} className="yakutsk__place-image" />
        <span className="yakutsk__place-address">{place.address}</span>
        <span className="yakutsk__place-schedule">
          Время работы: с {place.beg} до {place.end}
        </span>
      </div>
      <div className="yakutsk__place-info">
        <h4 className="yakutsk__place-title">{place.title}</h4>
        <p className="yakutsk__place-placedescription">{place.description}</p>

      </div>
    </li>
  );
};

export default Place;
