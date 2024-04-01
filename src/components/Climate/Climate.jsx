// import React from 'react';
import './Climate.css'

const Climate = () => {
    return (
        <section className="climate">
        <h2 className="climate__title">
          Средняя температура воздуха и влажность в Якутске по месяцам, 2023 год
        </h2>
        <table
          className="climate__table"
          width="400px"
          height="500px"
          style={{border: '2px solid', textAlign: 'center'}}
        >
          <tr style={{backgroundColor: '#ccc', border: '2px solid'}}>
            <th colSpan="3">Якутск</th>
          </tr>
          <tr style={{backgroundColor: '#ccc', border: '2px solid'}}>
            <th>Месяц</th>
            <th>t, °C</th>
            <th>φ, %</th>
          </tr>
          <tr>
            <td>Январь</td>
            <td>−38°C</td>
            <td>72%</td>
          </tr>
          <tr>
            <td>Февраль</td>
            <td>−32°C</td>
            <td>73%</td>
          </tr>
          <tr>
            <td>Март</td>
            <td>−16.6°C</td>
            <td>69%</td>
          </tr>
          <tr>
            <td>Апрель</td>
            <td>−2.8°C</td>
            <td>58%</td>
          </tr>
          <tr>
            <td>Май</td>
            <td>+7.8°C</td>
            <td>51%</td>
          </tr>
          <tr>
            <td>Июнь</td>
            <td>+18°C</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Июль</td>
            <td>+19.5°C</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Август</td>
            <td>+15.9°C</td>
            <td>68%</td>
          </tr>
          <tr>
            <td>Сентябрь</td>
            <td>+7°C</td>
            <td>71%</td>
          </tr>
          <tr>
            <td>Октябрь</td>
            <td>-5.1°C</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>Ноябрь</td>
            <td>-24.1°C</td>
            <td>80%</td>
          </tr>
          <tr>
            <td>Декабрь</td>
            <td>-36,9°C</td>
            <td>74%</td>
          </tr>
          <tr style={{backgrounColor: '#ccc', border: 'solid 2px'}}>
            <th>По месяцам</th>
            <th>-7.3°C</th>
            <th>67%</th>
          </tr>
        </table>
        <a
          className="climate__source"
          href="https://weatherarchive.ru/Temperature/Yakutsk/January-2023"
          target="_blank"
          >Источник <img className="climate__linkicon" src="./src/images/link-icon.png"
        /></a>
      </section>
    );
};

export default Climate;