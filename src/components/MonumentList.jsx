import React from 'react';
import Monuments from '../components/data/Monuments'
import { useNavigate, useLocation } from 'react-router-dom';

const MonumentList = () => {

  const navigate = useNavigate();

  const handleMonumentClick = (monument) => {
    navigate(`/interactiveMap/${monument.id}`);
  };

  return (
    <div class="grid-container">

      {Monuments.map((monument) => (
          <div key={monument.id} onClick={() => handleMonumentClick(monument)} className='grid-item' style={{ backgroundImage: `url(${monument.media[0].src})` }}>
            <div className="grid-item-text">
              {monument.title}
            </div>
          </div>
        ))}

      {/* <h2>Список монументов</h2>
      <ul>
        {Monuments.map((monument) => (
          <li key={monument.id} onClick={() => handleMonumentClick(monument)} className='monumentlist-item'>
            {monument.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MonumentList;