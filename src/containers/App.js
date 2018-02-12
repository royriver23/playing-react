import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'ewre2', name: 'Roy', age: 28 },
      { id: 'frer2', name: 'Karolina', age: 30 },
      { id: 'fdfd4', name: 'Testname', age: 33 }
    ],
    otherState: 'some other value',
    showsPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; Not a solution, this updates the original state by reference
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showsPersons;
    this.setState({showsPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showsPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => {this.deletePersonHandler(index)}}
              name={person.name}
              age={person.age}
              changed={(event) => {this.nameChangedHandler(event, person.id)}} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi there, I'm using React!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonsHandler} className={btnClass} >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
