function validateWinner(board, n, player_number) {
    console.log(board)
    let winner = false;

    if (validateHorizontalLines(board, n, player_number))
        winner = true;
    else if (validateVerticalLines(board, n, player_number))
        winner = true;
    else if (validateDiagonalLines(board, n, player_number))
        winner = true;

    return winner;

}


function validateHorizontalLines(board, n, player_number) {
    console.log('horizontal');
    var count;
    for (let i = 0; i < n; i++) {
        count = 0;
        for (let j = 0; j < n; j++) {
            if (board[i][j] === player_number)
                count++;
            if (count === n)
                return true;
        }


    }
    return false;
}

function validateVerticalLines(board, n, player_number) {
    console.log('vertical');
    var count;
    for (let j = 0; j < n; j++) {
        count = 0;
        for (let i = 0; i < n; i++) {
            if (board[i][j] === player_number)
                count++;
            if (count === n)
                return true;
        }


    }
    return false;
}

function validateDiagonalLines(board, n, player_number) {
    console.log('diagonal');
    /**Diagonal principal */
    var count = 0;
    for (let i = 0; i < n; i++) {
        if (board[i][i] === player_number)
            count++;
    }
    if (count === n)
        return true;

    /**Diagonal secundaria */
    count = 0;
    for (let i = 0; i < n; i++) {
        if (board[i][n - i - 1] === player_number)
            count++;
    }

    if (count === n)
        return true;

    return false;
}