import React, { useState, useEffect } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((item) => (
        <option key={item.dateBasic} value={item.dateBasic}>
          {item.dateExtended}
        </option>
      ))}
    </>
  );
};

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/cities`)
      .then((response) => response.json())
      .then((json) => setCities(json.data));
  }, []);

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/dates`)
      .then((response) => response.json())
      .then((json) => setDates(json.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onJourneyChange(fromCity, toCity, date);
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
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select value={toCity} onChange={handleToCityChange}>
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select value={date} onChange={handleDateChange}>
                <DatesOptions dates={dates} />
              </select>
            </label>
            <div className="journey-picker__controls">
              <button
                className="btn"
                type="submit"
                disabled={
                  date === '' || fromCity === '' || toCity === '' ? true : false
                }
              >
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
