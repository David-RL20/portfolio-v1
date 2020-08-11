import React from 'react';
import { connect } from 'react-redux';
import CheckLogo from '../assets/static/check.svg';
import '../assets/styles/components/Home.scss';

const Home = (props) => {
  const { currentTheme, profile } = props;
  const { description_short, technologies } = profile;

  async function getLogo(name) {
    const logo = await import(
      /* webpackMode: "eager" */ `../components/logos/${name}`
    );
    return logo;
  }
  return (
    <div className={`home-container ${currentTheme}-theme`}>
      <div className="main-section">
        <div className="name-container">
          <p className="primary-color">Hi, my name is</p>
          <div className="name-section">
            <p>David Rodriguez</p>
            <p className="font-2">Web Development</p>
          </div>
          <div className="resume-section">{description_short}</div>
        </div>
        <div className="what-I-done">
          <div className={`${currentTheme}-theme logo-container`}>
            <CheckLogo />
          </div>
          <button type="button">See what I've done</button>
        </div>
      </div>
      <div className="technologies-container">
        {technologies.map((tech) => {
          return (
            <div className="item-container" key={tech.name}>
              <img src={tech.svg[currentTheme]} alt="" />
              <p>{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Home);
