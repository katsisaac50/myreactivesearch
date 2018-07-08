import React, { Component } from 'react';
import Search from './Search';
import AppFooter from '../Component/Footer';


class HomePage extends Component {
  render() {
    return (
      <div>
			<Search/>
			<AppFooter/>
      </div>
    );
  }
}

export default HomePage;
