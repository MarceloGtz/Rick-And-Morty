import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import getStatus from './utils/getStatus';

const Resident = ({ url }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, []);
  console.log(resident.status);
  return (
    // ----- CARD -----
    <article className='residents__card'>
      <img
        src={resident.image}
        className='residents__img'
        alt={resident.name + ' photo'}
      />
      <div className='residents__body'>
        <p className='residents__name'>
          <b>{resident.name}</b>
        </p>
        <p className='residents__p'>
          <span
            className={
              getStatus(resident.status) + ' residents__status' + ' ping'
            }
          ></span>
          <b>
            {resident.status} - {resident.species}
          </b>
        </p>
        <p className='residents__p'>
          <b>Origin: </b>
          {resident.origin?.name}
        </p>
        <p className='residents__p'>
          <b>Episodes: </b>
          {resident.episode?.length}
        </p>
      </div>
    </article>
  );
};

export default Resident;
