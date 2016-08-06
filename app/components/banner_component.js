import React, { Component } from 'react';

import SearchBar from '../containers/search_bar_container';


export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='bannerCont'>
        <h1 className='navLogoText'>NODJ</h1>
        <SearchBar className="twelve columns" /> 
      </div>
    );
  };
}
