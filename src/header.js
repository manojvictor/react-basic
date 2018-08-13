import React from 'react';
import logo from './logo.svg';

import Title from './Header/title'

class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </header>
    );
  }
}

export default Header;