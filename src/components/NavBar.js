import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center sticky-top">
          <a href="/" className="navbar-brand d-flex w-20 mr-auto">John Bramley</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationList">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-80" id="navigationList">
            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#rtf" >Return the Favor</a>
                  <a className="dropdown-item" href="#mtgscript">MtG Script Automater</a>
                  <a className="dropdown-item" href="#twitchfollower">Twitch Follower</a>
                  <a className="dropdown-item" href="#connect4">Connect 4</a>
                </div>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#education">Education</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }
}

export default NavBar;