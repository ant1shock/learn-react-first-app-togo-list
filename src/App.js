import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the Trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner in cafe',
        completed: true
      },
      {
        id: 3,
        title: 'Dev meeting',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id ===id) {
        todo.completed =!todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <h1>My App</h1>
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
