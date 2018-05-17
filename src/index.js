//오목
class gomoku {
  player = "black";
  board = [];
  row = 15;
  col = 15;

  Create2DArray(rows, columns) {
    let x = new Array(rows);
    for (let i = 0; i < rows; i++) {
      x[i] = new Array(columns);
    }
      this.board = x;
  }
  init() {
    this.Create2DArray(this.col, this.row);
    this.player = "black";
    this.board = this.Create2DArray(this.row, this.col);
  }
  // 풀어놓은 배열에 돌이 다섯 개인지 확인한다.
  // 게임이 끝났는지 확인하는 부분 
  isFiveStones(arr) {
    let white = 0;
    let black = 0;

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
      if (black === 5) {
        return "black";
      } else if (white === 5) {
        return "white";
      }
    }
  }
  // 클릭된 좌표를 넣어서 배열로 풀기
  toOneDimensionalArr(col, row) {
    arr = 
      {colArr: [],
      rowArr: [],
      toMinusDiagonalArr: [],
      toPlusDiagonalArr: [],}
  

    for (let i = 0; i < this.col; i++) {
      // 가로 세로 방향 배열로 넣기 
      arr.colArr.push(this.board[col][i]);
      arr.rowArr.push(this.board[i][row]);

      // 대각선방향 
      //row 가 클 때
      if (col < row) {
        if(this.board[i][(row - col) + i]){
          arr.toPlusDiagonalArr.push(this.board[i][(row - col) + i]);
        }
      } else { // col이 클 때 
          if(this.board[(col - row) + i][i]) {
            arr.toPlusDiagonalArr.push(this.board[(col - row) + i][i]);
          }
        }
        // 대각선방향 
        if ( row + col < 14) {
          if (i <= row + col) {
            arr.toMinusDiagonalArr.push(this.board[row + col - i][i])
          }
        } else {
          if(col - row + i <= 14) {
            arr.toMinusDiagonalArr.push(this.board[14 - i][row - (14 - col) + i])
          }
        }
      }
      return arr
    }
    checkWinner(row, col) {
     const winner = this.isFiveStones(this.toOneDimensionalArr(row,col))
      if (winner) {
        return winner;
      }
    }
  }

  const game = new gomoku();
  game.init();

  // col이 클릭되면 this.board를 바꿔준다.
  // player를 바꿔준다.
  // 화면에 그려준다. 

  const rowEl = document.querySelectorAll('.row')
  const winnerEl = document.queryselector('.winner')
  function draw() {
    rowEl.forEach((row, rowIndex) => {
      row.queryselectorAll('col').forEach((col, colIndex) => {
        if (game.board[rowIndex][colIndex]) {
          col.classlist.add(game.board[rowIndex][colIndex])
        }
      })
    })
  }
  rowEl.forEach((row, rowIndex) => {
    row.queryselectorAll('.col').forEach((col, colIndex) => {
      col.addEventListener(('click'), e => {
        this.board[rowIndex][colIndex] = this.player
        draw()
        if(this.checkWinner(rowIndex, colIndex)) {
          winnerEl.textContent = `${this.player}`
        }
        if (this.player === 'black') {
          this.player = 'white'
        } else {
          this.player = 'white'
        }
      })
    })
  })


