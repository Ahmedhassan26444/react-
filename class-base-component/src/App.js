import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>   {/* Count on top */}
        <button onClick={this.increment}>Increment</button>  {/* Button below */}
      </div>
    );
  }
}

export default App;
