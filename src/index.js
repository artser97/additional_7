module.exports = function solveSudoku(matrix) {
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (matrix[a][b] === 0) {
        for (let x = 1; x <= 9; x++) {
          if (iterAB(matrix, a, b, x) && checkSquare(matrix, a, b, x)) {
            matrix[a][b] = x;
            if (solveSudoku(matrix)) {
              return matrix;
            }
            matrix[a][b] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;

  function iterAB(matrix, a, b, x) {
    for (i = 0; i < 9; i++) {
      if (i !== a && matrix[i][b] === x || i !== b && matrix[a][i] === x) {
        return false;
      }
    }
    return true;
  }

  function checkSquare(matrix, a, b, x) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i !== a && j !== b && matrix[Math.floor((a / 3)) * 3 + i][Math.floor((b / 3)) * 3 + j] === x) {
          return false;
        }
      }
    }
    return true;
  }
}
