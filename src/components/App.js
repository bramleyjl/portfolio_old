import React, { Component } from 'react';
import '../App.css';
import projectList from '../projectList'
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import Project from './Project';
import Education from './Education';
import Contact from './Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectList
    };
  }
  render() {
    return (
      <div className="container-fluid">
        
        <Header />

        <NavBar />       

        <div className="container">

          <About />

          <div id="portfolio">
            <h1 className="section-title">Portfolio</h1>
              <Project id="rtf" details={this.state.projects['rtf']} />
              <Project id="mtgscript" details={this.state.projects['mtgscript']} />          
              <Project id="twitchfollower" details={this.state.projects['twitchfollower']} />
              <Project id="connect4" details={this.state.projects['connect4']} />          
          </div>

          <Education />

          <Contact />    

        </div>

      </div>
    );
  }
}

export default App;
