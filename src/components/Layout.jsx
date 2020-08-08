import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Social from './Social';
import Footer from './Footer';

const Layout = (props) => {
  const {
    children,
    currentTheme,
    currentLanguage,
    menuOptions,
    profile,
    footer,
  } = props;
  const { social } = profile;
  document.body.className = `${currentTheme}-theme`;
  return (
    <>
      <Header
        currentTheme={currentTheme}
        currentLanguage={currentLanguage}
        menuOptions={menuOptions}
      />
      {children}
      <Social
        currentTheme={currentTheme}
        social={social}
        icons={profile.social}
      />
      <Footer
        currentTheme={currentTheme}
        footer={footer}
        currentLanguage={currentLanguage}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Layout);
