import React from 'react';
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import InteractiveMapPage from './pages/InteractiveMapPage';
import MonumentListPage from './pages/MonumentListPage';

const App = () => {

  return (
    <div>
      <Header />
      <main>
      <Routes>
          {/* / и /interactive-map отображают InteractiveMapPage */}
          <Route path="/" element={<InteractiveMapPage />} />
          <Route path="/interactiveMap" element={<InteractiveMapPage />} />
          <Route path="/monumentList" element={<MonumentListPage />} />
          <Route path="/interactiveMap/:id" element={<InteractiveMapPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
