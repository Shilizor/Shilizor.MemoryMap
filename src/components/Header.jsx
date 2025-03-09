import '../styles/Header.css'
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation(); // Получаем текущий маршрут

  const handleNavigation = (path) => {
    navigate(path); // Переход на указанный маршрут
  };

  const isInteractiveMapActive = location.pathname === '/' || location.pathname.startsWith('/interactiveMap');
  const isMonumentListActive = location.pathname === '/monumentList';

  return (
    <>
      <header>
        <div className="leftside">
          <div className="logo"><p className="logo-text">Карта памяти</p></div>
          <nav>
            <ul className="nav-items">
              <li className={isInteractiveMapActive ? 'nav-item active' : 'nav-item'} onClick={() => handleNavigation('interactiveMap')}>
                <img src="" alt="" className="nav-img" />
                <p>Интерактивная карта</p>
              </li>
              <li className={isMonumentListActive ? 'nav-item active' : 'nav-item'} onClick={() => handleNavigation('monumentList')}>
                <img src="" alt="" className="nav-img" />
                <p>Список монументов</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="rightside">
          <input className="search" type="search" placeholder='Поиск...'/>
        </div>
      </header>
    </>
  )
}

export default Header
