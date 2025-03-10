import React from 'react';
import Monuments from '../components/data/Monuments'
import { useNavigate, useLocation } from 'react-router-dom';

const MonumentList = () => {

  const navigate = useNavigate();

  const handleMonumentClick = (monument) => {
    navigate(`/interactiveMap/${monument.id}`);
  };

  const testcmd = (monument) => (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
    alert(`${monument.description}`)
  };

  return (
    <div className="grid-container">

      {Monuments.map((monument) => (
          <div key={monument.id} onClick={() => handleMonumentClick(monument)} className='grid-item' style={{ backgroundImage: `url(${monument.media[0].src})` }}>
            <div className="grid-item-text">
              {monument.title}
            </div>
            <button className="grid-item-btn" onClick={testcmd(monument)}>Описание</button>
          </div>
        ))}
    </div>
  );
};

export default MonumentList;