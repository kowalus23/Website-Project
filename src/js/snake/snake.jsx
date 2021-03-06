import React from "react";
import {Link} from 'react-router';
import {AudioGame} from "../website/websiteaudio.jsx";

const body = 1;
const food = 2;
const keys = {left: 37, up: 38, right: 39, down: 40};
const dirs = {37: true, 38: true, 39: true, 40: true};


export class SnakeGame extends React.Component {
  constructor(props) {
    super(props);

    const start = this.props.startIndex || 161;
    const snake = [start];
    const board = [];
    board[start] = body;
    this.state = {
      snake: snake,
      board: board,
      growth: 0,
      paused: true,
      gameOver: false,
      direction: keys.up,
      specialKey: 0
    }
  }

  componentDidMount() {
    this.resume();
  }

  pause() {
    if (this.state.gameOver || this.state.paused) {
      return;
    }
    this.setState({paused: true});
  }

  resume() {
    if (this.state.gameOver || !this.state.paused) {
      return;
    }
    this.setState({paused: false});
    this.refs.board.focus();
    setTimeout(() => {
      this.tick();
    }, 100);
  }

  tick() {
    if (this.state.paused) {
      return;
    }

    const snake = this.state.snake;
    const board = this.state.board;
    let growth = this.state.growth;
    let direction = this.state.direction;

    let numRows = this.props.numRows || 20;
    let numCols = this.props.numCols || 20;
    let head = getNextIndex(snake[0], direction, numRows, numCols);

    if (snake.indexOf(head) !== -1) {
      this.setState({gameOver: true});
      return;
    }
    const needsFood = board[head] === food || snake.length === 1;
    if (needsFood) {
      let ii;
      const numCells = numRows * numCols;
      do {
        ii = Math.floor(Math.random() * numCells);
      } while (board[ii]);
      board[ii] = food;
      growth += 1;
    } else if (growth) {
      growth -= 1;
    } else {
      board[snake.pop()] = null;
    }
    snake.unshift(head);
    board[head] = body;

    this.setState({
      snake: snake,
      board: board,
      growth: growth,
    });
    setTimeout(() => {
      this.tick();
    }, 100);
  }

  handleKey(event) {
    let direction = event.nativeEvent.keyCode;
    let difference = Math.abs(this.state.direction - direction);
    if (dirs[direction] && difference !== 0 && difference !== 2) {
      this.setState({
        direction: direction
      })
    }
  }

  render() {
    // Tworzenie mapy/planszy z podziałem na Kolumny/Wiersze i ich wielkość
    const cells = [];
    const numRows = this.props.numRows || 20;
    const numCols = this.props.numCols || 20;
    const cellSize = this.props.cellSize || 30;

    let key = -1;
    for (let row = 0; row < numRows; row++) {
      key++;
      for (let col = 0; col < numCols; col++) {
        key++;
        let code = this.state.board[numCols * row + col];
        let type = code === body ? 'body' : code === food ? 'food' : 'null';
        cells.push(<div key={key} id={key} className={type + '-cell'}/>);
      }
    }

    return (
      <div className="snake-game">
        <AudioGame/>
        <h1 className="snake-score">Score: {this.state.snake.length}</h1>
        <div ref="board"
             className={'snake-board' + (this.state.gameOver ? ' game-over' : '')}
             tabIndex={0}
             onBlur={this.pause.bind(this)}
             onFocus={this.resume.bind(this)}
             onKeyDown={this.handleKey.bind(this)}
             style={{width: numCols * cellSize, height: numRows * cellSize}}>
          {cells}
        </div>
        <div className="snake-controls">
          {this.state.paused ?
            <button onClick={this.resume.bind(this)} className="btn"><Link to="/snakemenu">RETURN</Link>
            </button> : null}
          {this.state.paused ?
            <button onClick={this.resume.bind(this)} className="btn"><Link to="/snakegameover">SCORE</Link>
            </button> : null}
          {this.state.gameOver ?
            <button onClick={this.resume.bind(this)} className="btn"><Link to="/snakegameover">GAMEOVER</Link>
            </button> : null}
        </div>
      </div>
    );
  }
}


function getNextIndex(head, direction, numRows, numCols) {
  let x = head % numCols;
  let y = Math.floor(head / numCols);

  switch (direction) {
    case keys.up:
      y = y <= 0 ? numRows - 1 : y - 1;
      break;
    case keys.down:
      y = y >= numRows - 1 ? 0 : y + 1;
      break;
    case keys.left:
      x = x <= 0 ? numCols - 1 : x - 1;
      break;
    case keys.right:
      x = x >= numCols - 1 ? 0 : x + 1;
      break;
    default:
      return;
  }

  return (numCols * y) + x;
}