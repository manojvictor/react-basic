import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import './index.css';
import App from './App';

//Layout
import Layout from './pages/layout';

//Pages
import Featured from './pages/featured';
import Archives from './pages/archives';
import Settings from './pages/settings';

const root = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Layout}></IndexRoute>
			<Route path="featured" component={Featured}></Route>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
root);
