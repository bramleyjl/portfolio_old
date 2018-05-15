import React from 'react';

class Education extends React.Component {
  render() {

    const details = this.props.details

    return (
      <div id="education" className="anchor">
        <h1 className="section-title">Education</h1>
        <ul className="education-body">
          <li><h3 className="section-subtitle">Albany Can Code</h3></li>
          <li><h3 className="section-subtitle">The George Washington University</h3></li>
        </ul>          
      </div>
    )
  }
}

export default Education