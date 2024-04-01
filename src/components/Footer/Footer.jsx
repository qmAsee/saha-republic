import './Footer.css'
// import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <span className="footer__text">ПГНИУ</span>
        <span className="footer__text">Web-картографирование, 2024</span>
        <span className="footer__text">Купчин М.С.</span>
      </div>
      <div className="footer__logo-wrapper">
        <a href="http://gis.psu.ru/" target="_blank">
          <img
            className="footer__logo"
            src="./src/images/psu_caf.png"
            style={{width: '74px', height: '55px'}}
          />
        </a>
        <a href="https://www.psu.ru/" target="_blank">
          <img
            className="footer__logo"
            src="./src/images/psu_logo.png"
            style={{width: '80px', height: '80px'}}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
