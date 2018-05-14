import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1 className="section-title">About Me</h1>      
        <div className="row align-items-center">

          <div className="col-md">
            <div className="about-img text-white">
              <img className="img-fluid" src={require('../about/hackupstate.jpg')} alt='hackupstate' />
              <div className="card-img-overlay">
                <h5 class="card-title">Hack Upstate XI</h5>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card about-info">
              <div class="card-body">
                <h3 class="card-title section-subtitle">Card title that wraps to a new line</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 class="card-title">Card title that wraps to a new line</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="about-img text-white">
              <img className="img-fluid" src={require('../about/jademtn.jpeg')} alt='jademtn' />
              <div className="card-img-overlay">
                <h5 class="card-title">Jade Mountain, Taiwan</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    )                    
  }
}

export default About