import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header style={ headerStyle}>
      <h1>TODO LIST</h1>
      <Link className='links' to='/'>Home</Link>
      <Link className='links' to='/about'>About</Link>
    </header>
  )
}

const headerStyle = {
  backgroundColor: 'black',
  color: 'white'
}
