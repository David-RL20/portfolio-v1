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
  } = props;
  document.body.className = (`${currentTheme}-theme`);
  return (
    <>
      <Header
        currentTheme={currentTheme}
        currentLanguage={currentLanguage}
        menuOptions={menuOptions}
      />
      {children}
      <Social currentTheme={currentTheme} icons={profile.social} />
      <Footer currentTheme={currentTheme} currentLanguage={currentLanguage} />
    </>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Layout);
