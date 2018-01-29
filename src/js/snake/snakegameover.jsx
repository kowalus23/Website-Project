import React from "react";
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import fetch from 'whatwg-fetch';
import {AudioGameover} from "../website/websiteaudio.jsx";
import {CSSTransitionGroup} from 'react-transition-group';


export class SnakeGameOver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        }
    }

    handleClick() {
        this.setState({isShown: !this.state.isShown})
    }


    slideBox() {
        return (
            <ul className="gameover-icons">
                <li className="icon-floppy">1. PLAYER1 NAME - SCORE: 250</li>
                <li className="icon-floppy">2. PLAYER2 NAME - SCORE: 440</li>
                <li className="icon-floppy">3. PLAYER3 NAME - SCORE: 130</li>
                <li className="icon-floppy">4. PLAYER4 NAME - SCORE: 200</li>
                <li className="icon-floppy">............................</li>
            </ul>
        )
    }

    render() {
        let btnText = this.state.isShown ? '-' : '+';
        let component = this.state.isShown ? this.slideBox() : '';
        // function addPlayer(name) {
        //     fetch('http://localhost:9007/', {
        //         method: 'POST',
        //         body: JSON.stringify(myData),
        //         data: {
        //             title: name,
        //         }
        //     })
        //         .then(resp => resp.json()).then(data => {
        //         console.log(data);
        //         readPlayer()
        //     });
        // }
        //
        // function readPlayer() {
        //     fetch('http://localhost:9007/').then(r => r.text())
        //         .then(data => {
        //             console.log(data);
        //
        //         });
        // }

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
                            <input type="text" placeholder="Podaj swój nick..." className="gameover-input"/>
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