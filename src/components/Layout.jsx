import React from 'react';
import Header from './Header';
import Social from './Social';
import Footer from './Footer';

const Layout = ({ children }) => {
  const currentTheme = 'dark';
  document.body.classList.add(`${currentTheme}-theme`);
  return (
    <>
      <Header />
      {children}
      <Social />
      <Footer />
    </>
  );
};

export default Layout;
