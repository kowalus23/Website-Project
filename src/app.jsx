import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Website from "./js/website/website.jsx";
import {Router, Route, hashHistory} from 'react-router';
import SnakeMain from "./js/snake/snakemenu.jsx";
import {SnakeGameOver} from "./js/snake/snakegameover.jsx";
import {SnakeGame} from "./js/snake/snake.jsx";


class App extends React.Component {
  render() {
    return <Router history={hashHistory}>
      <Route path='/' component={Website}/>
      <Route path='/snakemenu' component={SnakeMain}/>
      <Route path='/snakegameover' component={SnakeGameOver}/>
      <Route path='/snakegame' component={SnakeGame}/>
    </Router>;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
