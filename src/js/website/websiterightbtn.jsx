import React from "react";

export class WebsiteRightButton extends React.Component {
  render() {
    return (
      <div className="right-button-box boxes">
        <div className="container-button">
          <div className="title-color-container">
            <a className="title-color right-title-color"><span>PUZZLE</span></a>
          </div>
          <div className="left-toggle">
            <input type="checkbox"/>
            <span className="left-button"/>
            <span className="left-label">PLAY</span>
          </div>
        </div>
      </div>)
  }
}
