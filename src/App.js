import React, { Component } from 'react';
import Header from './Component/Header';
import AppFooter from './Component/Footer';
import Search from './Container/Search';
//import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        < Search />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
