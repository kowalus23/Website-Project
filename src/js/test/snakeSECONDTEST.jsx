import React, {Component} from 'react'
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import '../../scss/main.scss';
import {mapstyle} from "./style.jsx";
import {AudioTest} from "../website/websiteaudio.jsx";


function handleTeleport(obj) {
    // RIGHT
    if (obj.state.snakeHeadX > MAP_SIZE - SNAKE_SIZE) {
        obj.setState({snakeHeadX: 0})
    }
    // LEFT
    if (obj.state.snakeHeadX < 0) {
        obj.setState({snakeHeadX: MAP_SIZE - SNAKE_SIZE})
    }
    // BOTTOM
    if (obj.state.snakeHeadY > MAP_SIZE - SNAKE_SIZE) {
        obj.setState({snakeHeadY: 0})
    }
    // TOP
    if (obj.state.snakeHeadY < 0) {
        obj.setState({snakeHeadY: MAP_SIZE - SNAKE_SIZE})
    }
}

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            snakeHeadX: 0,
            snakeHeadY: 0,
            snakeDirection: 'RIGHT',
        };

        setInterval(() => {
            handleDirection(this);
            handleTeleport(this);
            // this.state.score++
        }, 10);

    }

    componentWillMount() {
        document.addEventListener('keydown', event => {

            switch (event.keyCode) {
                case RIGHT:
                    this.setState({snakeDirection: 'RIGHT'});
                    break;
                case DOWN:
                    this.setState({snakeDirection: 'DOWN'});
                    break;
                case LEFT:
                    this.setState({snakeDirection: 'LEFT'});
                    break;
                case UP:
                    this.setState({snakeDirection: 'UP'});
                    break;
                default:
                    break
            }
        })

    }



    render() {

        const snakestyle = {
            width: SNAKE_SIZE,
            height: SNAKE_SIZE,
            left: this.state.snakeHeadX,
            top: this.state.snakeHeadY,
            position: 'absolute',
            backgroundColor: 'green',
        };

        return (
            <div>
                <AudioTest/>
                <div style={mapstyle}>
                    <div style={snakestyle}/>
                    SCORE: {this.state.score}
                </div>
                <button className="btn"><Link to="/snakemenu">RETURN</Link></button>
            </div>
        )
    }
}

const RIGHT = 39;
const DOWN = 40;
const LEFT = 37;
const UP = 38;

const SNAKE_SIZE = 30;
const MAP_SIZE = 600;

function handleDirection(obj) {
    if (obj.state.snakeDirection === 'RIGHT') {
        obj.setState({snakeHeadX: obj.state.snakeHeadX + 2})
    }
    if (obj.state.snakeDirection === 'DOWN') {
        obj.setState({snakeHeadY: obj.state.snakeHeadY + 2})
    }
    if (obj.state.snakeDirection === 'LEFT') {
        obj.setState({snakeHeadX: obj.state.snakeHeadX - 2})
    }
    if (obj.state.snakeDirection === 'UP') {
        obj.setState({snakeHeadY: obj.state.snakeHeadY - 2})
    }
}

export default Test
