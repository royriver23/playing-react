import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Roy', age: 28 },
      { name: 'Karolina', age: 30 },
      { name: 'Testname', age: 33 }
    ],
    otherState: 'some other value',
    showsPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Roy José';
    this.setState({ persons: [
        { name: newName, age: 28 },
        { name: 'Karolina', age: 30 },
        { name: 'Testname', age: 69 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ persons: [
      { name: 'Roy', age: 28 },
      { name: 'Karolina', age: 30 },
      { name: event.target.value, age: 69 }
    ]
  })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({showsPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showsPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}>
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Other other name')}>
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler}>
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi there, I'm using React!</h1>
        <button
        onClick={this.togglePersonsHandler}
        style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
