/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ThemeButton from './ThemeButton';
import '../assets/styles/components/Header.scss';
import ReactLogo from '../assets/static/logo.svg';

const Header = ({ currentTheme, currentLanguage, menuOptions }) => {
  return (
    <header className={`${currentTheme}-theme`}>
      <div>
        <div className='logo'>
          <ReactLogo />
        </div>
      </div>
      <div>
        <ul>
          {menuOptions.map((option) => {
            if (option.highlight) return <li key={option[currentLanguage]} className='highlight'>{option[currentLanguage]}</li>;

            return <li key={option[currentLanguage]}>{option[currentLanguage]}</li>;
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
