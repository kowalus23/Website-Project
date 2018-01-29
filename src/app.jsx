import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';
import './scss/main.scss';
import {Website} from "./js/website/website.jsx";
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import {SnakeMain} from "./js/snake/snakemenu.jsx";
import {Snake} from "./js/snake/snake.jsx";
import {SnakeGame} from "./js/snake/snakegame.jsx";
import {SnakeGameOver} from "./js/snake/snakegameover.jsx";
import {SnakeGames} from "./js/snake/snake.jsx";
import {SnakeTest} from "./js/snake/snakeTEST.jsx";
import Test from "./js/test/snakeSECONDTEST.jsx";




class App extends React.Component {
    render() {
        return <Router history={hashHistory}>
            <Route path='/' component={Website}/>
            <Route path='/snakemenu' component={SnakeMain}/>
            <Route path='/snakegame' component={SnakeGame}/>
            <Route path='/snakegameover' component={SnakeGameOver}/>
            <Route path='/snakegames' component={SnakeGames}/>
            <Route path='/test' component={Test}/>
        </Router>;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
