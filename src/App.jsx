import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { CurrentWeather } from './components/CurrentWeather';

function App() {
  return (
    <section>
      <Header />
      <CurrentWeather />
      <div className=" content-wrapper">
      <h3>Dự báo</h3>
        <div style={{ backgroundColor: '#F1F6FF' }}>
          <div className="d-flex justify-content-between">
            <b>18</b>
            Th 4
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
