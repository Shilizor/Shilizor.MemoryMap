// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/Search.css';
import data from '../components/data/Monuments';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
  
    // Обработчик ввода текста
    const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
  
      // Фильтрация данных на основе введенного текста
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) || item.type.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setShowDropdown(value.length > 0 && filtered.length > 0);
    };
  
    // Обработчик выбора элемента из выпадающего меню
    const handleItemClick = (item) => {
      setQuery(item.title); // Устанавливаем выбранный элемент в поле ввода
      navigate(`/interactiveMap/${item.id}`);
      window.location.reload();
      setShowDropdown(false); // Скрываем выпадающее меню
    };
  
    return (
      <div className="search-bar">
        <input
          type="search"
          placeholder="Поиск..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Задержка для клика
        />
        {showDropdown && filteredData.length > 0 && (
          <ul className="dropdown">
            {filteredData.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item)}>
                <strong>{item.title}</strong>
                <br />
                <small>{item.type}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SearchBar;