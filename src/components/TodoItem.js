import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  getStyle = () =>{
    return{
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return(
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onClick={this.props.markComplete.bind(this, id)}/>
          {title}
          <button style={btnStyle} onClick={this.props.handleDelete.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
const btnStyle ={
  backgroundColor: 'red',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }
