import './Header.css'
// import { React } from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__background">
        <div className="header__textblock">
          <h1 className="header__title">Республика Саха</h1>
          <span className="header__subtitle">
            Волшебный край морозов, бриллиантов и самобытной культуры
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
