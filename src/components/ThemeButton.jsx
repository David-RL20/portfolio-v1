import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/ThemeButton.scss';
import { setTheme } from '../actions';

const ThemeButton = (props) => {
  const { currentTheme } = props;

  const handleClick = () => {
    if (currentTheme !== 'dark') return props.setTheme('dark');
    return props.setTheme('light');
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className='switch'>
      <input type='checkbox' onClick={() => { handleClick(); }} />
      <span className='slider round' />
    </label>
  );
};
const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
    currentTheme: state.currentTheme,
  };
};

const mapDispatchToProps = {
  setTheme,
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemeButton);
