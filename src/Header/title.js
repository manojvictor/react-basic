import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {name: 'Manoj'};
    }
  render() {
      console.log(this.props);
    return (
          <h1 className="App-title">{this.props.title}!
        </h1>
    );
  }
}

export default Title;