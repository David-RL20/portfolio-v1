import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  return (
    <header>
      <div>logo</div>
      <div>menu</div>
      <div>{theme}<button></button></div>
    </header>
  );
};

export default Header;
