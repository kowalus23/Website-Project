import React from "react";

export class AudioMenu extends React.Component {
  render() {
    return (
      <audio autoPlay>
        <source src="audio/Menu.mp3" type="audio/mp3"/>
      </audio>
    )
  }
}

export class AudioGame extends React.Component {
  render() {
    return (
      <audio autoPlay>
        <source src="audio/Game.mp3" type="audio/mp3"/>
      </audio>
    )
  }
}

export class AudioGameover extends React.Component {
  render() {
    return (
      <audio autoPlay>
        <source src="audio/Gameover.mp3" type="audio/mp3"/>
      </audio>
    )
  }
}

export class AudioTest extends React.Component {
  render() {
    return (
      <audio autoPlay>
        <source src="audio/Test.mp3" type="audio/mp3"/>
      </audio>
    )
  }
}