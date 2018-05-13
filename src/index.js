//오목
class gomoku {
  board = this.Create2DArray(15,15);
  player = 'black';
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
    this.Create2DArray(this.col,this.row);
    this.player = 'black';
  }
  isFiveStones(black, white) {
    if (black === 5) {
      return 'black'
    } else if (white === 5) {
      return 'white'
    }
  }
  // 같은 행 확인 (가로)
  checkCol() {
    for (let i = 0; i < this.col; i++){
      const black = 0;
      const white = 0;
      for(let j = 0; j < this.row; j++){
        if(this.board[i][j] === undefined) {
          black = 0;
          white = 0;
        } else if (this.board[i][j] === 'black') {
          white = 0;
          black++;
        } else {
          black = 0;
          white ++
        } 
        const fiveStones = this.isFiveStones(black, white);
        if(fiveStones){
          return fiveStones;
        }
      }
    }
  }
  // 같은 열 확인(세로)
  checkRow() {
    for (let i = 0; i < this.col; i++){
      const black = 0;
      const white = 0;
      for(let j = 0; j < this.row; j++){
        if(this.board[j][i] === undefined) {
          black = 0;
          white = 0;
        } else if (this.board[j][i] === 'black') {
          white = 0;
          black++;
        } else {
          black = 0;
          white ++
        } 
        const fiveStones = this.isFiveStones(black, white);
        if(fiveStones){
          return fiveStones;
        }
      }
    }
  }
  // 대각선 확인
  checkDiagonal() {
    for(let i = 0; i < 10; i++) {
      const black = 0;
      const white = 0;
      for (let j = 0; i + j < this.col; j++){
      if (this.board[i][i] === undefined) {
        black = 0;
        white = 0;
      } else if (this.board[j][j+i] === 'black') {
        white = 0;
        black++
      } else {
        black = 0;
        white++
      }
     }
    }
  }
  
}
