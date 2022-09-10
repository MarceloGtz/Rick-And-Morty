import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Resident from './Resident';

function App() {
  const [location, setLocation] = useState({});
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((res) => setLocation(res.data));
  };

  // console.log(location);

  return (
    <div className='App'>
      {/* ----- HEADER ----- */}
      <Header />

      {/* LOCATION INFO */}
      <section className='location'>
        <h1 className='location__title'>{location.name}</h1>
        <div className='location__info'>
          <p>
            <b>Type: </b>
            <span>{location.type}</span>
          </p>
          <p>
            <b>Dimension: </b>
            <span>{location.dimension}</span>
          </p>
          <p>
            <b>Population: </b>
            <span>{location.residents?.length}</span>
          </p>
          <p>
            <b>Id: </b>
            <span>{location.id}</span>
          </p>
        </div>
      </section>

      {/* ----- INPUT ----- */}
      <div className='input-ctn'>
        <div className='group'>
          <svg className='icon' aria-hidden='true' viewBox='0 0 24 24'>
            <g>
              <path d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'></path>
            </g>
          </svg>
          <input
            placeholder='Search'
            type='search'
            className='input'
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
          />
          <button className='input-search' onClick={searchLocation}>
            Search
          </button>
        </div>
      </div>

      {/* ----- CARD CONTAINER ----- */}

      <main className=''>
        {/* ----- CARD ----- */}
        <section className='residents'>
          {location.residents?.map((resident) => (
            <Resident url={resident} key={resident} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
