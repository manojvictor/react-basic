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
  render() {
      setTimeout(() => {
          this.setState({title: 'Welcome Manoj'})
      }, 2000);
      
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <Header title={"Title"} name={"test"} />
        <Footer />

      </div>
    );
  }
}

export default App;
