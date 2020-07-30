/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ThemeButton from './ThemeButton';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import ReactLogo from '../assets/static/logo.svg';

const Header = () => {
  const currentTheme = 'dark';
  return (
    <header className={`${currentTheme}-theme`}>
      <div>
        <div className='logo'>
          <ReactLogo />
        </div>
      </div>
      <div>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li className='highlight'>Projects</li>
        </ul>
      </div>
      <div className='theme-container'>
        <div>{currentTheme} </div>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
