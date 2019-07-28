import React from "react";
import {Link} from 'react-router';
import {AudioGameover} from "../website/websiteaudio.jsx";
import {CSSTransitionGroup} from 'react-transition-group';

export class SnakeGameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      nickName: '',
      score: 0
    }
  }

  handleClick() {
    this.setState({isShown: !this.state.isShown})
  }

  slideBox(nickName, score) {
    return (
      <ul className="gameover-icons">
        <li className="icon-floppy">1. PLAYER1 NAME - SCORE: 250</li>
        <li className="icon-floppy">2. PLAYER2 NAME - SCORE: 440</li>
        <li className="icon-floppy">3. PLAYER3 NAME - SCORE: 130</li>
        <li className="icon-floppy">4. PLAYER4 NAME - SCORE: 200</li>
        <li className="icon-floppy">5. {nickName} - {score}: XXX</li>
      </ul>
    )
  }

  onChangeNick = (event) => {
    this.setState({nickName: event.target.value})
  };

  render() {
    let btnText = this.state.isShown ? '-' : '+';
    let component = this.state.isShown ? this.slideBox(this.state.nickName, this.state.score) : '';

    return <div className="gameover-body-wrapper">
      <AudioGameover/>
      <div className="gameover-body">
        <div className="gameover-container">
          <div className="gameover-title">
            <div className="pull-right">
              <button className="gameover-minimize"
                      onClick={this.handleClick.bind(this)}>{btnText}</button>
              <button className="gameover-expand"><Link to="/snakemenu">o</Link></button>
              <button className="gameover-times"><Link to="/snakemenu">x</Link></button>
            </div>
            <h1>
              <div className="icon-my-computer"/>
              My Przegryw - Board
            </h1>
          </div>
          <ul className="gameover-toolbar">
            <li className="file"><u>F</u>ile</li>
            <li className="edit"><u>E</u>dit</li>
            <li className="view"><u>V</u>iew</li>
            <li className="help"><u>H</u>elp</li>
          </ul>
          <div className="gameover-container-inner">
            <CSSTransitionGroup
              transitionName="slide"
              transitionAppear={true}
              transitionAppearTimeout={400}
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}>
              {component}
            </CSSTransitionGroup>
            <div>
              <input onChange={this.onChangeNick} type="text" placeholder="Podaj swój nick..." className="gameover-input"/>
            </div>
          </div>
          <div className="gameover-statusbar">
            <div className="gameover-left left">4 object(s)</div>
            <div className="gameover-right right">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  }
}