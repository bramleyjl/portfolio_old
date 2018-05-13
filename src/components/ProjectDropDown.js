import React from 'react';

class ProjectDropDown extends React.Component {
  render() {

    const details = this.props.details

    return (
      <div className="row align-items-center">
        <div className="col-md">
          <img className="img-fluid" src={require(`../../public/previews/${details.preview}`)} alt={details.preview} />
        </div>
        <div className="col-md">
          <p>{details.blurb}</p>
          <a href={details.site}>View Site</a>
          <a href={details.repo}>View GitHub</a>
        </div>
      </div>
    )
  }
}

export default ProjectDropDown