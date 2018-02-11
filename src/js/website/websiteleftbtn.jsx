import React from "react";
import {SnakeMain} from "../snake/snakemenu.jsx";
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';




export class WebsiteLeftButton extends React.Component {


    render() {
        return (
            <div className="left-button-box boxes">
                <div className="container-button">
                    <div className="title-color-container">
                        <Link className="title-color" to="/snakemenu" style={{textDecoration: 'none'}}><span>SNAKE</span></Link>
                    </div>
                    <div className="left-toggle">
                        <input type="checkbox"/>
                        <span className="left-button"/>
                        <span className="left-label">PLAY</span>
                    </div>
                    <div className="tooltip">here
                        <span className="tooltiptext">click <span>title</span> to start</span>
                    </div>
                </div>
            </div>

        )
    }
}
