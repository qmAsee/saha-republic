import { useEffect, useState } from "react";
import "./Weather.css";
import { weatherStatuses } from "../../utils/weatherIconsSrc";

const { sunny, partlyCloudy, cloudy, wind, humidity, pressure } = weatherStatuses;

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  // Функция-подгрузка данных
  async function fetchWeatherData() {
    await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=734ac8e19b4b4ba096c61158242803&q=Yakutsk&days=1&aqi=no&alerts=no"
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherInfo(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  //Функция обновления (повторной подгрузки)
  function handleUpdateWeather() {
    setIsLoading(true);
    setTimeout(() => {
      fetchWeatherData();
      console.log(weatherInfo)
      setIsLoading(false);
    }, 1000);
  }

  return (
    <section id="weather" className="weather">
      <h3 className="weather__title">Погода в Якутске</h3>

      {isLoading ? (
        <span className="loader"></span>
        
      ) : (
        <>
          {weatherInfo.current && (
            <>
              <span className="weather__time">
                на {weatherInfo.current.last_updated}
              </span>
              <div className="weather__content">
                <div className="weather__wrapper">
                  <div className="weather__current">
                    <span className="weather__temp">
                      {weatherInfo.current.temp_c} °
                    </span>
                    <img
                      src={
                        weatherInfo.current.condition.text === "Clear"
                          ? sunny
                          : weatherInfo.current.condition.text ===
                            "Partly cloudy"
                          ? partlyCloudy
                          : weatherInfo.current.condition.text === "Cloudy"
                          ? cloudy
                          : null
                      }
                      alt="погода"
                      className="weather__sky"
                    />
                    <div className="weather__info-s">
                      <span className="weather__state">
                        {weatherInfo.current.condition.text === "Sunny"
                          ? "Ясно"
                          : weatherInfo.current.condition.text ===
                            "Partly cloudy"
                          ? "Облачность с прояснениями"
                          : weatherInfo.current.condition.text === "Cloudy"
                          ? "Облачно"
                          : null}
                      </span>
                      <span className="weather__feelslike">
                        Ощущается как{" "}
                        {weatherInfo.current.feelslike_c.toFixed(0)}°
                      </span>
                    </div>
                  </div>
                  <div className="weather__additional">
                    <div className="weather__param">
                      <img
                        src={wind}
                        alt="ветер"
                        className="weather__params-icon"
                      />
                      <span className="weather__params-text">
                        {(weatherInfo.current.wind_kph / 10).toFixed(1)} м/с
                      </span>
                    </div>
                    <div className="weather__param">
                      <img
                        src={humidity}
                        alt="влажность"
                        className="weather__params-icon"
                      />
                      <span className="weather__params-text">
                        {weatherInfo.current.humidity} %
                      </span>
                    </div>
                    <div className="weather__param">
                      <img
                        src={pressure}
                        alt="давление"
                        className="weather__params-icon"
                      />
                      <span className="weather__params-text">
                        {weatherInfo.current.pressure_mb * 0.75} мм.рт.ст
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleUpdateWeather()}
                    className="weather__update"
                  >
                    Обновить данные
                  </button>
                </div>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A49b1f15d6a1b2d7db24bac5d479816651d591cae7cd1584a79d75c85438c4565&amp;source=constructor"
                  width="373"
                  height="249"
                  frameBorder="0"
                ></iframe>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Weather;
