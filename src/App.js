import React from 'react';
import './App.css';

import Header from './header';
import Footer from './footer';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome'
        }
    }

    changeTitle(title) {
      this.setState({title});
    }
  render() {
      // setTimeout(() => {
      //     this.setState({title: 'Welcome Manoj'})
      // }, 2000);
      
    return (
      <div className="app">      
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>

    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));
