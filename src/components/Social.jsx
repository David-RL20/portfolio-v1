import React from 'react';
import '../assets/styles/components/Social.scss';

const Social = ({ currentTheme, social }) => {
  return (
    <div className={`${currentTheme}-theme social-section`}>
      <div className='social-images-container'>
        {/* {social.map(async (item) => {
          return (
            <a target='_blank' rel='noreferrer' href={item.link}>
            </a>
          );
        })} */}
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
