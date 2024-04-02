// import React from "react";
<<<<<<< HEAD
import './Info.css'
=======
import "./Info.css";
>>>>>>> 0f33f98 (added weather widget)

const Info = () => {
  return (
    <section className="info">
      <div className="info__location">
        <h2 className="info__map-title">Расположение</h2>
        <article className="info__desc-wrapper">
          <img
            className="info__map"
            src="./src/images/sakha_karta.png"
            alt="Карта"
          />
          <p className="info__desc">
            Якутия расположена в северо-восточной части Сибири. Граничит на
            востоке с Чукотским АО, Магаданской областью, на юго-востоке — с
            Хабаровским краем, на юге — с Амурской областью и Забайкальским
            краем, на юго-западе — с Иркутской областью, на западе — с
            Красноярским краем, на севере её естественные рубежи образуют моря
            Лаптевых и Восточно-Сибирское.
          </p>
        </article>
      </div>

<<<<<<< HEAD
      <h2 className="info__title">Природные достопримечательности</h2>
=======
      <h2 id="attractions" className="info__title">
        Природные достопримечательности
      </h2>
>>>>>>> 0f33f98 (added weather widget)
      <ul className="info__factlist">
        <li className="info__fact">
          <div className="info__fact-wrapper">
            <h3 className="info__fact-title">Озеро Лабынкыр</h3>
            <a
              className="info__fact-link"
              href="https://www.100yakutia.ru/attraction/748-ozero-labynkyr-yakutskij-lokh-ness"
              target="_blank"
            >
              <img
                className="info__fact-image"
                src="./src/images/labynkyr.jpg"
                alt="Озеро Лабынкыр"
              />
              <img
                className="info__fact-linkicon"
                src="./src/images/link-icon.png"
              />
            </a>
          </div>
          <div className="info__textwrapper">
            <p className="info__fact-text">
              Среди всех озёр Республики этот водоём – самый известный. В длину
              озеро достигает 14 км, в глубину до 80 м. Найти его можно на
              востоке региона в Оймяконском районе, в одном из самых холодных
              мест на планете. Зимой температура воздуха может достигать –60 С.
            </p>
<<<<<<< HEAD
            <span className="info__coordinates">
              62°30′17″ с. ш. 143°36′03″ в. д.
            </span>
          </div>
        </li>
        <li className="info__fact">
          <p className="info__fact-text">
            Самый узнаваемый символ Республики Саха – природный парк «Ленские
            столбы» возвышается над берегом реки Лены. (Кстати, привычное
            русскоговорящим название «Лена» не имеет ничего общего с женским
            именем – это лишь производное от эвенкийского слова «Елю-Эне»,
            которое переводится как «Большая Река»).
          </p>
=======
            <a href="https://clck.ru/39jiLt" target="_blank" className="info__coordinates">
              62°30′17″ с. ш. 143°36′03″ в. д.
            </a>
          </div>
        </li>
        <li className="info__fact">
          <div className="info__textwrapper">
            <p className="info__fact-text">
              Самый узнаваемый символ Республики Саха – природный парк «Ленские
              столбы» возвышается над берегом реки Лены. (Кстати, привычное
              русскоговорящим название «Лена» не имеет ничего общего с женским
              именем – это лишь производное от эвенкийского слова «Елю-Эне»,
              которое переводится как «Большая Река»).
            </p>
            <a href="https://clck.ru/39jiXK" target="_blank" className="info__coordinates">
              61°06′25″ с. ш. 127°21′42″ в. д
            </a>
          </div>
>>>>>>> 0f33f98 (added weather widget)
          <div className="info__fact-wrapper">
            <h3 className="info__fact-title">Ленские столбы</h3>
            <a
              className="info__fact-link"
              href="https://lena-pillars.ru/"
              target="_blank"
            >
              <img
                className="info__fact-image"
                src="./src/images/lenstolb.jpg"
                alt="Ленские столбы"
              />
              <img
                className="info__fact-linkicon"
                src="./src/images/link-icon.png"
              />
            </a>
          </div>
        </li>
        <li className="info__fact">
          <div className="info__fact-wrapper">
            <h3 className="info__fact-title">Полюс холода Оймякон</h3>
            <a
              className="info__fact-link"
              href="https://travel-ykt.ru/geografiya/naselennye-punkty/ojmyakon-polyus-holoda.html"
              target="_blank"
            >
              <img
                className="info__fact-image"
                src="./src/images/oimyakon.jpg"
                alt="Полюс холода Оймякон"
              />
              <img
                className="info__fact-linkicon"
                src="./src/images/link-icon.png"
              />
            </a>
          </div>
<<<<<<< HEAD
          <p className="info__fact-text">
            Оймяконская впадина в Якутии – одно из наиболее суровых мест на
            планете, претендующее на звание самого холодного на территории
            северного полушария. Температура в зимнее время здесь достигает
            -60˚С и ниже, а летом она может подняться до +30°С. Таким образом,
            годовая амплитуда температур составляет 100˚С, а иногда и выше!
          </p>
=======
          <div className="info__textwrapper">
            <p className="info__fact-text">
              Оймяконская впадина в Якутии – одно из наиболее суровых мест на
              планете, претендующее на звание самого холодного на территории
              северного полушария. Температура в зимнее время здесь достигает
              -60˚С и ниже, а летом она может подняться до +30°С. Таким образом,
              годовая амплитуда температур составляет 100˚С, а иногда и выше!
            </p>
            <a href="https://clck.ru/39jikz" target="_blank" className="info__coordinates">
              63°27′46″ с. ш. 142°47′24″ в. д.
            </a>
          </div>
>>>>>>> 0f33f98 (added weather widget)
        </li>
        <li className="info__fact"></li>
      </ul>
    </section>
  );
};

export default Info;
