import React from 'react';
import './Header.css';
import RickAndMortyLogo from '../assets/images/Rick-and-Morty-Logo-Transparent.png';

const Header = () => {
  return (
    <header className='header'>
      <img
        src={RickAndMortyLogo}
        alt='Rick And Morty'
        className='header__logo'
      />
    </header>
  );
};

export default Header;
