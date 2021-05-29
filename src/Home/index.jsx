import React, { useState } from 'react';
import JourneyPicker from '../JourneyPicker/index';

const Home = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (fromCity, toCity, date) => {
    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((json) => setJourney(json.data));
  };

  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null ? (
        <div>Nalezeno spojení s id {journey.journeyId}</div>
      ) : (
        <div></div>
      )}
      <h2>Domovska stranka</h2>
    </>
  );
};

export default Home;
