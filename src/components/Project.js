import React from 'react';
import AnimateHeight from 'react-animate-height';
import ProjectDropDown from './ProjectDropDown';

class Project extends React.Component {
  
  constructor() {
    super();
    this.state = {
      height: 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };
  

  render() {

    const details = this.props.details

    return (
      <div className="project-container"
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
      >
        <div className="row align-items-center justify-content-around">      
          <div className="col-md-4">
            <img className="logo" src={require(`../../public/logos/${details.logo}`)} alt={details.logo} />
          </div>
          <div className="col-md-8">
            <h2 className="section-subtitle">{details.name}</h2>
            <h4 className="section-text">[{details.tech.join(', ')}]</h4>
          </div>
        </div>
         <AnimateHeight
        duration={ 500 }
        height={ this.state.height }
        >
        <div className="submenu-container">
          <ProjectDropDown details={details} />
        </div>
      </AnimateHeight>
      </div>
    )
  }
}

export default Project;