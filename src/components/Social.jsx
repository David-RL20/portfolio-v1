import React from 'react';
import Linkedin from '../assets/static/linkedin.svg';
import '../assets/styles/components/Social.scss';

const Social = ({ currentTheme }) => {
  return (
    <div className={`${currentTheme}-theme social-section`}>
      <div className='social-images-container'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/david-alejandro-rodriguez-leal-297a201a8/'
        >
          <Linkedin />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/david-alejandro-rodriguez-leal-297a201a8/'
        >
          <Linkedin />
        </a>
      </div>
      <div className='svg-container'>
        <svg width='100' height='100'>
          <line x1='50%' y1='0' x2='50%' y2='80%' />
          <circle cx='50%' cy='80%' r='2' />
        </svg>
      </div>
    </div>
  );
};

export default Social;
