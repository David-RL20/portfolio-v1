import React from 'react';
// import { connect } from 'react-redux';
import '../assets/styles/components/ThemeButton.scss';

const ThemeButton = () => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className='switch'>
      <input type='checkbox' />
      <span className='slider round' />
    </label>
  );
};

export default ThemeButton;
