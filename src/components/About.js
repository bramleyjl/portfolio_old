import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1>About Me</h1>
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid" src={require('../about/hackupstate.jpg')} alt='hackupstate' />
            <h5 class="caption">Hack Upstate XI</h5>
          </div>
          <div className="col-md-7">
            <h2>Lorem Ipsum goes here</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid" src={require('../about/jademtn.jpeg')} alt='jademtn' />
            <h5 class="caption">Jade Mountain, Taiwan</h5>
          </div>
          <div className="col-md-7">
            <h2>Lorem Ipsum goes here</h2>
          </div>
        </div>
      </div>
    )                    
  }
}

export default About