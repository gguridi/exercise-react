import React, { Component } from 'react';
import SudokuGame from 'sudoku-react-component';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class App extends Component {

  componentDidMount() {
    console.log($.fn.tooltip.Constructor.VERSION);
  }

  render() {
    return (
      <React.Fragment>
        <SudokuGame />
      </React.Fragment>
    );
  }
}

export default App;
