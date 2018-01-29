import React from "react";
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';


export class SnakeGame extends React.Component {

    render() {
        return <div>
            <h1>JESTEM GRĄ</h1>
            <button><Link to="/snakemenu">return</Link></button>
            <button><Link to="/snakegameover">gameover</Link></button>
        </div>
    }
}