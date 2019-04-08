import React, { Component } from "react";
import "./PumButton.scss";

class PumButton extends Component {
  audioNode = React.createRef();

  componentDidMount() {
    this.audioNode.current.addEventListener("ended", e => {
      this.props.handlePlay(this.props.name);
    });
  }

  play = () => {
    this.audioNode.current.play();
  };

  stop = () => {
    this.audioNode.current.pause();
    this.audioNode.current.currentTime = 0;
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (nextProps.isPlaying) {
      if (!this.props.isPlaying) this.play();
    } else {
      if (this.props.isPlaying) this.stop();
    }
  };

  handlePlay = () => {
    this.props.handlePlay(this.props.name);
  };

  render() {
    return (
      <div
        className={`PumButton ${this.props.isPlaying && "PumButton_playing"}`}
        onClick={this.handlePlay}
      >
        <audio ref={this.audioNode} src={this.props.audio} />
        {this.props.children}
      </div>
    );
  }
}

export default PumButton;
