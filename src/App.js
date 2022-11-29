import React, { Component } from "react";
import SudokuGame from "react-sudoku-component";
import "./stylesheets/main.scss";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SudokuGame />
        <div className="powered-by">
          PoweredBy&nbsp;
          <a href="https://sunnanv.github.io/react-sudoku-component/" target="_blank" rel="noreferrer">
            React Sudoku Component
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
