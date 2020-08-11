/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import '../assets/styles/components/Header.scss';
import ReactLogo from '../assets/static/logo.svg';

const Header = ({ currentTheme, currentLanguage, menuOptions }) => {
  return (
    <header className={`${currentTheme}-theme`}>
      <div>
        <div className='logo'>
          <Link to='/'>
            <ReactLogo />
          </Link>
        </div>
      </div>
      <div>
        <ul>
          {menuOptions.map((option) => {
            if (option.highlight) {
              return (
                <Link key={option[currentLanguage]} to={option.link}>
                  <li className='highlight'>{option[currentLanguage]}</li>
                </Link>
              );
            }
            return (
              <Link key={option[currentLanguage]} to={option.link}>
                <li key={option[currentLanguage]}>{option[currentLanguage]}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='theme-container'>
        <div>{currentTheme}</div>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
