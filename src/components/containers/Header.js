import React from 'react';
import Navbar from '../Navbar';
import Search from '../Search';

const Header = (props) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center'
  }
  return (
    <header style={headerStyle}>
      <Navbar />
      <Search
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </header>
  )
}

export default Header