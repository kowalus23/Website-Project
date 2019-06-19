import React from "react";

export class WebsiteVideo extends React.Component {
  render() {
    return (
      <video playsInline autoPlay muted loop>
        <source src="images/backgdround.mp4" type="video/mp4"/>
      </video>
    )
  }
}
