import React from 'react';

class ProjectDropDown extends React.Component {
  render() {
    return (
      <div className="nav__submenu">
        <div className="nav__submenu-item ">
          <a>Our Company</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Our Team</a>
        </div>
        <div className="nav__submenu-item ">
          <a>Our Portfolio</a>
        </div>
      </div>
    )
  }
}

export default ProjectDropDown