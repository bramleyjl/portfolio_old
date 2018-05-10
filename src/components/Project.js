import React from 'react';
import AnimateHeight from 'react-animate-height';
import ProjectDropDown from './ProjectDropDown';

class Project extends React.Component {
  
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  }

  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };
  

  render() {

    const details = this.props.details
    console.log(details.preview)

    return (
      <div className="project-container"
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}>

        <div className="row justify-content-around">      
            <div className="col-sm-4">
              <img className="logo" src={require(`../../public/logos/${details.logo}`)} alt="rtflogo" />
            </div>
            <div className="col-sm-8">
              <h2>{details.name}</h2>
            </div>
        </div>
      <AnimateHeight
        duration={ 500 }
        height={ this.state.height }
      >
        <div className="row submenu-container">
          <ProjectDropDown />
        </div>
      </AnimateHeight>
      </div>
    )
  }
}

export default Project;