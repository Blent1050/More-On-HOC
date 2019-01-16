import React from "react";
import ReactDOM from "react-dom";
import First from "./components/First";
import Second from "./components/Second";
import conditionalRender from "./components/conditionalRender";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showFirst: true
    };
  }
  toggle = e => {
    e.preventDefault();
    this.setState(prevState => ({ showFirst: !prevState.showFirst }));
  };
  render() {
    return (
      <div className="App">
        <RenderedComponent showFirst={this.state.showFirst} />
        <button onClick={this.toggle}>Toggle Components</button>
      </div>
    );
  }
}

const RenderedComponent = conditionalRender(First)(Second);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
