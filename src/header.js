import React from 'react';
import logo from './logo.svg';

import Title from './title'

class Header extends React.Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Title title={this.props.title}/>
        </header>
    );
  }
}

export default Header;