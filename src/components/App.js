import React, { Component } from 'react';
import '../App.css';
import projectList from '../projectList'
import NavBar from './NavBar';
import Project from './Project';

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

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <NavBar />       

        <div className="container">

          <div id="about">
            <h1>About Me</h1>
          </div>

          <div id="portfolio">
            <h1>Portfolio</h1>
              <Project id="rtf" details={this.state.projects['rtf']} />
              <Project id="mtgscript" details={this.state.projects['mtgscript']} />          
              <Project id="twitchfollower" details={this.state.projects['twitchfollower']} />
              <Project id="connect4" details={this.state.projects['connect4']} />          
          </div>

          <div id="education">
            <h1>Education</h1>
          </div>

          <div id="contact">
            <h1>Contact</h1>
          </div>        

        </div>

      </div>
    );
  }
}

export default App;
