import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Guest"
    };
  }

  render() {
    return (
      <div className="App">
        <p>
          {this.state.name}
        </p>
        <p>Count: {this.state.count}</p> {/* Example of using count */}
      </div>
    );
  }
}

export default App;