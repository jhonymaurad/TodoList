import React from 'react';

export default function Header(){
  return(
    <header style={ headerStyle}>
      <h1>TODO LIST</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: 'black',
  color: 'white'
}
