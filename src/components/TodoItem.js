import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        background: '#f4f4f4',
        borderBottom: '1px dotted #ccc',
        margin: '20px',
        padding: '10px',
        textDecoration: 'line-through'
      }
    } else {
        return {
          margin: '20px',
          padding: '10px',
          textDecoration: 'none'
        }
      }
    }




  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
          { this.props.todo.title }
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}



export default TodoItem
