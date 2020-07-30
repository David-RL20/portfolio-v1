import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const currentTheme = 'dark';
  document.body.classList.add(`${currentTheme}-theme`);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
