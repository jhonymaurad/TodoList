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
          <input type='checkbox' onClick={this.props.markComplete}/>
          {this.props.todo.title}
          </p>
      </div>
    )

  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }