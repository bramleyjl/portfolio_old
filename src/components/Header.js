import React from 'react';
import image from '../about/code.png'

class Header extends React.Component {
  render() {

  	const style = {
  			backgroundImage: `url(${image})`,
  			backgroundSize: 'cover'
  	}

    return (
        <header className="App-header" style={style}>
          <h1 className="App-title">John</h1>
          <h1 className="App-title">Bramley</h1>
          <h1 className="App-subtitle">A fullstack web developer</h1>
        </header>
    )
  }
}

export default Header