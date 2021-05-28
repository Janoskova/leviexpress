import React, { useState } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Uživatel jede z ${fromCity} do ${toCity} dne ${date}.`);
  };

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form" onSubmit={handleSubmit}>
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select value={fromCity} onChange={handleFromCityChange}>
                <option>Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select value={toCity} onChange={handleToCityChange}>
                <option>Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select value={date} onChange={handleDateChange}>
                <option>Vyberte</option>
                <option>20.05.2021</option>
                <option>21.05.2021</option>
                <option>22.05.2021</option>
                <option>23.05.2021</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button className="btn" type="submit">
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>
    </>
  );
};

export default JourneyPicker;
