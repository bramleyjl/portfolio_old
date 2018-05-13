import React from 'react';

class Education extends React.Component {
  render() {

    const details = this.props.details

    return (
      <div id="education">
        <h1>Education</h1>
        <ul>
          <li><h3>Albany Can Code</h3></li>
          <li><h3>The George Washington University</h3></li>
        </ul>          
      </div>
    )
  }
}

export default Education