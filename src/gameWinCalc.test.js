/* eslint-disable */
// toBe -> === -> Primitives, toEqual->Obj/Arrays
const {isWinningRow, isWinningCol, isWinDiag, calculateWinner} = require('./gameWinCalc');
let testSquares;

describe('Row Win Tests', () => {
  test('wins on X in a Row', () => {
          const xRow = ['X','X','X'];
    expect(isWinningRow(xRow)).toBe('X');
  });
  test('wins on o in a Row', () => {
          const oRow = ['o','o','o'];
    expect(isWinningRow(oRow)).toBe('o');
  });
});

describe('Column Win Tests', () => {
  beforeEach(() => {
    return testSquares = [[],[],[]].map( x => ['','','']);
  });
  test('No false Win', () => {
    testSquares[0][0] = 'X';
    testSquares[1][0] = 'O';
    testSquares[2][0] = 'X';
    expect(isWinningCol(testSquares,0)).toBe(null);
  });
  test('wins on X in Col0', () => {
    testSquares[0][0] = 'X';
    testSquares[1][0] = 'X';
    testSquares[2][0] = 'X';
    expect(isWinningCol(testSquares,0)).toBe('X');
  });
  test('wins on X in Col1', () => {
    testSquares[0][1] = 'X';
    testSquares[1][1] = 'X';
    testSquares[2][1] = 'X';
    expect(isWinningCol(testSquares,1)).toBe('X');
  });
  test('wins on X in Col2', () => {
    testSquares[0][2] = 'X';
    testSquares[1][2] = 'X';
    testSquares[2][2] = 'X';
    expect(isWinningCol(testSquares,2)).toBe('X');
  });
  
  test('wins on O in Col0', () => {
    testSquares[0][0] = 'O';
    testSquares[1][0] = 'O';
    testSquares[2][0] = 'O';
    expect(isWinningCol(testSquares,0)).toBe('O');
  });
  test('wins on O in Col1', () => {
    testSquares[0][1] = 'O';
    testSquares[1][1] = 'O';
    testSquares[2][1] = 'O';
    expect(isWinningCol(testSquares,1)).toBe('O');
  });
  test('wins on O in Col2', () => {
    testSquares[0][2] = 'O';
    testSquares[1][2] = 'O';
    testSquares[2][2] = 'O';
    expect(isWinningCol(testSquares,2)).toBe('O');
  });
});

describe('Diagonal Win Tests', () => {
  beforeEach(() => {
    return testSquares = [[],[],[]].map( x => ['','','']);
  });
  test('No false Win', () => {
    testSquares[0][0] = 'X';
    testSquares[1][0] = 'O';
    testSquares[2][0] = 'X';
    expect(isWinDiag(testSquares)).toBe(null);
  });
  test('TopLeft to BottomRight', () => {
    testSquares[0][0] = 'X';
    testSquares[1][1] = 'X';
    testSquares[2][2] = 'X';
    expect(isWinDiag(testSquares)).toEqual({winner:'X', fromTo:[[0,0],[2,2]]});
  });
  test('TopRight to BottomLeft', () => {
    testSquares[0][2] = 'X';
    testSquares[1][1] = 'X';
    testSquares[2][0] = 'X';
    expect(isWinDiag(testSquares)).toEqual({winner:'X', fromTo:[[0,2],[2,0]]});
  });
});

describe('Main calculateWinner Func Tests', () => {
  beforeEach(() => {
    return testSquares = [[],[],[]].map( x => ['','','']);
  });
  test('AOK return value on Row Win ', () => {
    testSquares[1] = ['O','O','O'];
    expect(calculateWinner(testSquares)).toEqual( { type: 'row', who: 'O', fromTo:[[1,0],[1,2]] } )
  });
  test('AOK return value on Col Win ', () => {
    testSquares[0][2] = 'X';
    testSquares[1][2] = 'X';
    testSquares[2][2] = 'X';
    expect(calculateWinner(testSquares)).toEqual( { type: 'col', who: 'X', fromTo:[[0,2],[2,2]] } )
  });
});