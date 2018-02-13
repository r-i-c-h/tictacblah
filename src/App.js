/* eslint no-unused-vars: 0 */  // --> OFF
import React, { Component } from 'react';
import {calculateWinner} from './gameWinCalc';

function Square({row,col,value,handleClick}) {
  return (
    <button className="square" data-row={row} data-col={col} onClick={handleClick} >
    {value}
    </button>
  );
}

function ResetButton({resetAction}){
  return (
    <button className="resetButton" onClick={resetAction}> New Game </button>
  );
}

class Board extends Component {
  renderSquare(value, rowNum, colNum) {
    return ( <Square value={value} 
      handleClick={this.props.clickFunc} 
      row={rowNum} 
      col={colNum} 
      key={'r'.concat(rowNum,'c',colNum)}/> 
    );
  }
  
  render() {
    return (
      <div className="game-board">
      { this.props.squares.map( (eachRow,rIndx) => {
          return (
            eachRow.map( (colBox,cIndx) => {
              const val = this.props.squares[rIndx][cIndx];
              return ( this.renderSquare(val, rIndx, cIndx) );
            })
          );  
        })
      }  
      </div>
    );
  }
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
class Game extends Component {
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  constructor(props) {
    super(props);
    this.state = {
      squares: [[],[],[]].map( x => ['','','']),
      isXturn: true,
      winner: null,
      gameOver: false,
      moveCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.newGame = this.newGame.bind(this);
    this.setCelVal = this.setCelVal.bind(this);
  }
  endGame() { this.setState({gameOver: true}); }

  ftw() {
    this.setState({winner: calculateWinner(this.state.squares)}, () => {
      if (this.state.winner) { 
        this.endGame(); 
        document.querySelector('.game-board').classList.add('rotate-center');
      }
      if (this.state.moveCount === 9){ this.endGame(); }
    });
  }
  
  setCelVal(r,c) { 
    const sqArr = this.state.squares;
    sqArr[r][c] = this.state.isXturn ? 'X' : 'O';
    this.setState({ 
      squares: sqArr, 
      isXturn: !this.state.isXturn, 
      moveCount: this.state.moveCount+1
      }, 
      () => { this.ftw(); }
    );
  }
  
  newGame(){
    this.setState({
      squares: [[],[],[]].map( x => ['','','']),
      winner: null,
      gameOver: false,
      moveCount: 0
    });
    document.querySelector('.game-board').classList.remove('rotate-center');
  }

  handleClick(e) {
    if (this.state.gameOver){ return; }
    const sqArr = this.state.squares;
    const r = Number(e.target.dataset.row);
    const c = Number(e.target.dataset.col);
    if (sqArr[r][c]) { return; }
    this.setCelVal(r,c);
  }
  
  render() {
    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner.who;
    } else if (this.state.gameOver) {
      status = 'GAME OVER - It\'s a Draw!';
    } else {
      status = 'It\'s ' + (this.state.isXturn ? 'X' : 'O') + '\'s Turn';
    }
    
    return (
      <div className="game">
         <Board
          squares={this.state.squares}
          clickFunc={this.handleClick}
        />
        <div className="game-info">
          <div>{status}</div>
          <ResetButton resetAction={this.newGame}/>
        </div>
      </div>
    );
  }
}

//========================================

export default Game;
