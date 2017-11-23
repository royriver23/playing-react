import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi there, I'm using React!</h1>
        <Person name="Roy" age="28"></Person>
        <Person name="Karolina" age="30"></Person>
        <Person name="Test" age="33"></Person>
      </div>
    );
  }
}

export default App;
