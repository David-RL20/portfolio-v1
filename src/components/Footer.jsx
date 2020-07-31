import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = ({ currentTheme }) => {
  return (
    <footer className={`${currentTheme}-theme`}>
      <div>
        <p>Design and built by</p>
        <a href='https://github.com/David-RL20' target='_blank'>
          @David RL
        </a>
      </div>
      <div>
        <p className='available'>Spanish </p>
        <p>|</p>
        <p>English </p>
      </div>
    </footer>
  );
};

export default Footer;
