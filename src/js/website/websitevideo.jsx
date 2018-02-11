import React from "react";

// const websiteBackground = require('../../images/background.mp4');

export class WebsiteVideo extends React.Component {
    render() {
        return (
            <video playsInline autoPlay muted loop>
                <source src="images/background.mp4" type="video/mp4"/>
            </video>
        )
    }
}
