import "./PlaceList.css";
import { useState, useEffect } from "react";
import Place from "../Place/Place";
import { fakeFetchCafes, fakeFetchCultures } from "../../utils/fakeApi";

const PlaceList = () => {
  const [places, setPlaces] = useState([]);
  const [placeType, setPlaceType] = useState("Поесть");
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    Promise.all([fakeFetchCafes(), fakeFetchCultures()]).then(
      ([cafes, cultures]) => {
        placeType === "Поесть"
          ? setPlaces(cafes)
          : placeType === "Окультуриться"
          ? setPlaces(cultures)
          : null;
          
          handleChangePlaceType(placeType)
      }
    );
  }, [placeType]);

  function handleChangePlaceType(type) {
    setPlaceType(type);
    setActiveButton(type);
  }

  return (
    <section id="yakutsk" className="places">
      <div className="places__heading">
        <h3 className="places__title">Якутск</h3>
        <span className="places__subtitle">Куда сходить? Чем заняться?</span>
      </div>
      <div className="places__buttons">
        <button
          className={`places__button ${
            activeButton === 'Поесть' ? "places__button_active" : ""
          }`}
          onClick={(e) => handleChangePlaceType(e.target.textContent)}
        >
          Поесть
        </button>
        <button
          className={`places__button ${
            activeButton === 'Окультуриться' ? "places__button_active" : ""
          }`}
          onClick={(e) => handleChangePlaceType(e.target.textContent)}
        >
          Окультуриться
        </button>
      </div>
      <ul className="places__list">
        {placeType === "Поесть"
          ? places.map((place) => {
              return <Place key={place.title} place={place} />;
            })
          : placeType === "Окультуриться"
          ? places.map((place) => {
              return <Place key={place.title} place={place} />;
            })
          : null}
      </ul>
    </section>
  );
};

export default PlaceList;
