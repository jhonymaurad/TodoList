import React, { Component } from 'react';

export default class AddToDo extends Component {
  state ={
    title: ''
  }
  onChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }
  render() {
    return(
      <form style={{display: 'flex'}}>
        <input type='text'
          name= 'title'
          placeholder='Add todo...'
          style={{flex:'10', padding: '5px'}}
          value={this.state.title}
          onChange={this.onChange}/>


        <input type='submit' value= 'submit' className= 'btn' style={{flex: '1'}}/>


      </form>
    )

  }
}