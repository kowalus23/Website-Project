import React from "react";
import {hashHistory} from 'react-router';


export class WebsiteLeftButton extends React.Component {
  constructor(props) {
    super(props);

  }

  onButtonHandler = () => {
    setTimeout(() => {
      hashHistory.push('/snakemenu')
    }, 500)
  };

  render() {
    return (
      <div className="left-button-box boxes">
        <div className="container-button">
          <div className="title-color-container">
            <a className="title-color"  ><span>SNAKE</span></a>
          </div>
          <div onClick={this.onButtonHandler} className="left-toggle">
            <input type="checkbox"/>
            <span className="left-button"/>
            <span className="left-label">PLAY</span>
          </div>
        </div>
      </div>
    )
  }
}
