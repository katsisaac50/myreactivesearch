import React, { Component } from 'react';
import HomePage from './Container/HomePage';
import AlbumPreview from './Component/Preview/AlbumPreview';
import { Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      
      <div>
        <Route exact path = "/" component ={HomePage}/>
        <Route  path="AlbumList" component = {AlbumPreview} />
        <Route  path="AlbumList/:id" component = {AlbumPreview} />
      </div>
    );
  }
}

export default App;
