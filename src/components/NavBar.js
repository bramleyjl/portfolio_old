import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-faded justify-content-center sticky-top">
          <a href="/" className="navbar-brand d-flex w-20 mr-auto">John Bramley</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationList">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-80" id="navigationList">
            <ul className="nav navbar-nav ml-auto justify-content-end">
              <li className="nav-item">
                  <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
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