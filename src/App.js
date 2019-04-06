import React, { Component } from "react";
import "./App.scss";
import PumButton from "./Blocks/PumButton/PumButton.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.sounds = [
      "wannabe",
      "boomboomgirs",
      "crandles",
      "fly",
      "letsgo",
      "mix",
      "memory",
      "fbiopenup"
    ];
    this.state = {};
    this.sounds.forEach(el => {
      this.prev = null;
      this.state[el] = { isPlaying: false };
    });
  }

  handlePlay = name => {
    if (this.state[name].isPlaying) {
      this.setState({ [name]: { isPlaying: false } });
    } else {
      this.setState({ [name]: { isPlaying: true } });
      if (this.prev && name !== this.prev) {
        this.setState({ [this.prev]: { isPlaying: false } });
        this.prev = name;
      } else {
        this.prev = name;
      }
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__logo" />
        {this.sounds.map(sound => (
          <PumButton
            key={sound}
            audio={`/sounds/${sound}.mp3`}
            handlePlay={this.handlePlay}
            name={sound}
            isPlaying={this.state[sound].isPlaying}
          >
            {sound.toUpperCase()}
          </PumButton>
        ))}
      </div>
    );
  }
}

export default App;
