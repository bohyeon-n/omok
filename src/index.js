//오목
class gomoku {
  board = this.Create2DArray(15, 15);
  player = "black";
  row = 15;
  col = 15;
  Create2DArray(rows, columns) {
    let x = new Array(rows);
    for (let i = 0; i < rows; i++) {
      x[i] = new Array(columns);
    }
    return x;
  }
  init() {
    this.Create2DArray(this.col, this.row);
    this.player = "black";
  }
  // 풀어놓은 배열에 돌이 다섯 개인지 확인한다.
  isFiveStones(arr) {
    const white = 0;
    const black = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        white = 0;
        black = 0;
        continue;
      } else if (arr[i] === "black") {
        black++;
        white = 0;
      } else {
        white++;
        black = 0;
      }
    }
    if (black === 5) {
      return "black";
    } else if (white === 5) {
      return "white";
    }
  }
  // 클릭된 좌표를 넣어서 배열로 풀기
  toOneDimensionalArr(col, row) {
    const colArr = [];
    const rowArr = [];
    const toPlusDiagonalArr = [];
    const toMinusDiagonalArr = [];
    for (let i = 0; i < this.col; i++) {
      // 가로 세로 방향 배열로 넣기 
      colArr.push(this.board[col][i]);
      rowArr.push(this.board[i][row]);
      // 대각선방향 
      //row 가 클 때
      if (col < row) {
        if(this.board[i][(row - col) + i] != undefined){
          toPlusDiagonalArr.push(this.board[i][(row - col) + i]);
        }
        if(this.board[row + col - i][i] != undefined){
          toMinusDiagonalArr.push(this.board[row + col - i][i])
        }
        // col이 클 때 
      } else {
        if(this.board[(col - row) + i][i]) {
          toPlusDiagonalArr.push(this.board[(col - row) + i][i]);
        }
        if(this.board[14 - i][row - (14 - col) + i]) {
          toMinusDiagonalArr.push(this.board[14 - i][row - (14 - col) + i])
        }
      }
    }
  }
}
