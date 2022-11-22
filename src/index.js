import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Square = (props) => <div className="square" />;

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
        <br />
        <div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
          <div className="row">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

