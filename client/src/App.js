import React, { PureComponent } from 'react';
import ProjectList from './components/projects/ProjectList';
import FooterContainer from './containers/FooterContainer';
import { projectData, typistConfig1, typistConfig2 } from './utils';
import Typist from 'react-typist';

import './App.css';

class App extends PureComponent {
  state = {
    isChatToggled: false
  }

  _handleChatToggle = () => {
    this.setState({isChatToggled: !this.state.isChatToggled})
  }

  render() {
    return (
      <div className="app-container">
        <header>
          <div className="header--text--container">
            <Typist className="header--text--name" {...typistConfig1} >
              Jen J Wong
            </Typist>
            <hr />
            <div className="header--text--title">Front End Engineer</div>
            <hr />
          </div>
        </header>
        <main>
          <Typist className="section-title" {...typistConfig2} >
            Applications & Open-Source
          </Typist>
          <div className="projects--container">
            <ProjectList list={projectData}/>
          </div>
        </main>
        <FooterContainer isChatToggled={this.state.isChatToggled} _handleChatToggle={this._handleChatToggle}/>
      </div>
    );
  }
}

export default App;
