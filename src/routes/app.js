import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import ResumeComponent from '../components/Resume';
import ProjectsComponent from '../components/ProjectsScreen';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Projects/:techI?' component={ProjectsComponent} />
        <Route exact path='/Resume' component={ResumeComponent} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
