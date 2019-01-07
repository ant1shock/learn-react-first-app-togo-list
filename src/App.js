import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodoItem from './components/AddTodoItem';
import About from './components/pages/About';

// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Take out the Trash',
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: 'Dinner in cafe',
      //   completed: true
      // },
      // {
      //   id: 3,
      //   title: 'Dev meeting',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      // .then(res => console.log(res.data))
      .then(res => this.setState({ todos: res.data }))
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
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));


    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //Add Todo Item
  AddTodoItem = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   // title: title,
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] })

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));


  }

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
          <div className='container'>

            <Route path="/" render={props => (
              <React.Fragment>
                <AddTodoItem AddTodoItem={this.AddTodoItem} />
                <div className='todo-list'>
                  <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo} />
                </div>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>


        </div>
      </Router>

    );
  }
}

export default App;
