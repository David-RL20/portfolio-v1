import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Footer.scss';
import { setLanguage } from '../actions';

const Footer = (props) => {
  const { currentTheme, currentLanguage, footer } = props;
  const changeLanguage = (language) => {
    props.setLanguage(language);
  };
  return (
    <footer className={`${currentTheme}-theme`}>
      <div>
        <p>{footer[currentLanguage]}</p>
        <a href="https://github.com/David-RL20" target="_blank">
          @David RL
        </a>
      </div>
      {currentLanguage === 'eng' ? (
        <div>
          <p
            className="available"
            onClick={() => {
              changeLanguage('esp');
            }}
          >
            Spanish
          </p>
          <p>|</p>
          <p>English </p>
        </div>
      ) : (
        <div>
          <p>Español </p>
          <p>|</p>
          <p
            className="available"
            onClick={() => {
              changeLanguage('eng');
            }}
          >
            Inglés
          </p>
        </div>
      )}
    </footer>
  );
};
const mapDispatchToProps = {
  setLanguage,
};
export default connect(null, mapDispatchToProps)(Footer);
