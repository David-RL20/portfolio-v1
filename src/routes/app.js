import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Resume from '../components/Resume';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Resume' component={Resume} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
