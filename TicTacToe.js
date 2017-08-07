// function gameInit() {

// A B C
// D E F
// G H I
  var statusLine = '';
  const horizLine = '|---+---+---|';
  var currentTurn = 'X';
    // var brd = [[' 1 ',' | ',' 2 ',' | ',' 3 '],[' 4 ',' | ',' 5 ',' | ',' 6 '],[' 7 ',' | ',' 8 ',' | ',' 9 ']] // pcs are at 0,2,4
  var brd = { A: 'A', B: 'B', C: 'C',
              D: 'D', E: 'E', F: 'F',
              G: 'G', H: 'H', I: 'I' };
  function renderBoard() {
    console.log(' |',brd.A,'|',brd.B,'|', brd.C, '|','\n',
                 horizLine, '\n',
                 '|',brd.D,'|',brd.E,'|', brd.F, '|','\n',
                 horizLine, '\n',
                 '|',brd.G,'|',brd.H,'|', brd.I, '|','\n',
                 statusLine);
  }
renderBoard();
//   function nextPlayer(){
//     currentTurn = currentTurn === 'X' ? 'O' : 'X';
//   }


//   function checkWin(){ return (
//           ( (brd[0][0] === brd[0][2]) && (brd[0][2] === brd[0][4]) ) || // horiz
//           ( (brd[1][0] === brd[1][2]) && (brd[1][2] === brd[1][4]) ) || // horiz
//           ( (brd[2][0] === brd[2][2]) && (brd[2][2] === brd[2][4]) ) || // horiz
//           ( (brd[0][0] === brd[1][0]) && (brd[1][0] === brd[2][0]) ) || // vert
//           ( (brd[0][2] === brd[1][2]) && (brd[1][2] === brd[2][2]) ) || // vert
//           ( (brd[0][4] === brd[1][4]) && (brd[1][4] === brd[2][4]) ) || // vert
//           ( (brd[0][0] === brd[1][4]) && (brd[1][4] === brd[2][4]) ) || // vert

// }