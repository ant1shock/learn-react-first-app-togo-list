import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodoItem from './components/AddTodoItem';

import uuid from 'uuid';

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

  //Delete Todo Item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //Add Todo Item
  AddTodoItem = (title) => {
    const newTodo = {
      id: uuid.v4(),
      // title: title,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Header />

        <div className='container'>

          <AddTodoItem AddTodoItem={this.AddTodoItem} />

          <div className='todo-list'>
            <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
