import React from "react";
import {Link} from 'react-router';
import {TypedReact} from "../typer.jsx";
import {AudioMenu} from "../website/websiteaudio.jsx";


const SnakeMain = () => {
  return (
    <div className="snake-menu-container">
      <AudioMenu/>
      <div className="snake-menu-row">
        <div className="snake-menu-text">
          <h1 className="snake-menu-title" style={{margin: '10px'}}> Snake </h1>
          <h2 className="snake-menu-subtitle" style={{margin: '10px'}}> Aim of the game </h2>
          <TypedReact strings={[
            'POZNAJCIE SNAKE! JEST ON PRZYJACIELSKIM ZWIERZAKIEM :)',
            'CAŁYMI DNIAMI NIC POZA POLOWANIEM NA JABŁUSZKO NIE ROBI, SŁODKI CO?',
            'JEDYNYM PROBLEMEM JEST JEGO KLATKA I ON SAM :('
          ]}/>
        </div>
        <div className="snake-menu-buttons">
          <button className="snake-menu-return-btn menu-btn btn"><Link to="/">RETURN</Link>
          </button>
          <button className="snake-menu-start-btn menu-btn btn"><Link to="/snakegame">START</Link>
          </button>
        </div>
      </div>
    </div>
  )
};

export default SnakeMain;