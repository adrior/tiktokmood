import React, { Component } from "react";
import "./App.scss";
import PumButton from "./Blocks/PumButton/PumButton.js";
import sounds from "./sounds.json";

class App extends Component {
  state = {
    currentSound: null
  };

  handlePlay = name => {
    this.setState({
      currentSound: this.state.currentSound === name ? null : name
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App__logo" />
        {sounds.map(sound => (
          <PumButton
            key={sound}
            audio={`sounds/${sound}.mp3`}
            handlePlay={this.handlePlay}
            name={sound}
            isPlaying={this.state.currentSound === sound}
          >
            {sound.toUpperCase()}
          </PumButton>
        ))}
      </div>
    );
  }
}

export default App;
