import React, { useState, useRef } from 'react';
import MapYandex from '../components/InteractiveMap';
import Monuments from '../components/data/Monuments'
import { useParams, useNavigate } from 'react-router-dom';


const InteractiveMapPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Получаем ID монумента из URL
  const [selectedMonument, setSelectedMonument] = useState(
    id ? Monuments.find((m) => m.id === Number(id)) : null
  );

  const [mapState, setMapState] = useState({
    center: selectedMonument ? selectedMonument.coordinates : [53.884466, 86.7502],
    zoom: selectedMonument ? 20 : 12,
    controls: []
  });

  const mapRef = useRef(null);

  const handleMonumentClick = (monument) => {
    setSelectedMonument(monument); // Обновляем выбранный монумент

    if (mapRef.current) {
      mapRef.current.setCenter(monument.coordinates, 20); // Устанавливаем центр и зум
    }

    navigate(`/interactiveMap/${monument.id}`);
  };

  return (  
    <MapYandex
    mapStateYandex={mapState}
    handleLocationClick={handleMonumentClick}
    mapRef={mapRef}
  />)
};

export default InteractiveMapPage;