const isWinningRow = singleRowArr => {
const [a, b, c] = singleRowArr;
  if (a !== '' && a === b && a === c) {
    return a;
  }
  return null;
};

const isWinningCol = (squaresArr, i) => {
  let top = squaresArr[0][i];
  if (top !== '') {
    if (top === squaresArr[1][i] && top === squaresArr[2][i]) {
      return top;
    }
  }
  return null;
};

const isWinDiag = (squaresArr) => {
  let mid = squaresArr[1][1];
  if (mid !== '') {
    let topL = squaresArr[0][0];
    let botR = squaresArr[2][2];
    if (mid === topL && mid === botR) {
      return {winner:mid, where:[[0,0],[1,1],[2,2]]};
    }
    let topR = squaresArr[0][2];
    let botL = squaresArr[2][0];
    if (mid === topR && mid === botL) {
      return {winner:mid, where:[[0,2],[1,1],[2,0]]};
    }
  }
  return null;
};


const calculateWinner = squaresArr => {
  for (let i = 0; i < squaresArr.length; i++) {
    if (isWinningRow(squaresArr[i])) {
      return { type: 'row', who: isWinningRow(squaresArr[i]), where:[[i,0],[i,1],[i,2]] };
    }
    if (isWinningCol(squaresArr, i)) {
      return { type: 'col', who: isWinningCol(squaresArr, i), where:[[0,i],[1,i],[2,i]] };
    }
  }
  if (isWinDiag(squaresArr)){
    const diagonalWin = isWinDiag(squaresArr);
    return { type: 'diagonal', who:diagonalWin.winner, where:diagonalWin.where };
  }
  return null;
};

module.exports =  {isWinningRow, isWinningCol, isWinDiag, calculateWinner};