import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      
      <div>
        <button onClick={this.IncrementItem}>Increment by 1</button>
        <button onClick={this.DecreaseItem}>Decrement by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide Me' : 'Show Me' }
        </button>
        { this.state.show ? <h2>Number of clicks :{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;