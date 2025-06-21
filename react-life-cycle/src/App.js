import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor');
  }

  // Runs once after the component is mounted
  componentDidMount() {
    console.log('componentDidMount: Component mounted.');
  }

  // Runs after every update (state or props change)
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated.');
  }

  // Runs just before the component is removed from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is being removed.');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render method');
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;