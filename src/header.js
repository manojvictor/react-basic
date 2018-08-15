import React from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';

import Title from './Header/title'

class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}
  render() {
    return (
		<header className="app-header">
			{this.props.children}
	        <Link to="archives">Archives</Link>
	        <Link to="settings">Settings</Link>
        </header>
    );
  }
}

export default Header;