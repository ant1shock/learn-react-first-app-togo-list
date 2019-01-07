import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodoItem extends Component {
  state = {
    title: ''
  }

  addTodoChange = (e) => this.setState({ title: e.target.value });

  onSubmitExample = (e) => {
    e.preventDefault();
    this.props.AddTodoItem(this.state.title);
    this.setState({ title: '' });
  }


  render() {
    return (
      <form onSubmit={this.onSubmitExample} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.addTodoChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

//PropTypes
AddTodoItem.propTypes = {
  AddTodoItem: PropTypes.func.isRequired
}

export default AddTodoItem
