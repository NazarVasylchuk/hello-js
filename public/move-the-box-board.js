var bRow = 8;
var bCol = 7;
var elBoard = document.querySelectorAll( 'table#move-the-box td' );

var board = [
    [ 0, 0, 0, 4, 0, 0, 0],
    [ 0, 0, 0, 4, 0, 0, 0],
    [ 0, 0, 4, 5, 0, 0, 0],
    [ 0, 4, 5, 2, 0, 0, 0],
    [ 0, 5, 4, 3, 0, 0, 0],
    [ 0, 4, 1, 4, 0, 0, 0],
    [ 4, 2, 4, 4, 0, 0, 0],
    [ 1, 1, 2, 3, 3, 0, 0]
];

function drawBoard() {
    for ( let r = 0; r < bRow; r++ ) {                // всі рядки
        for ( let c = 0; c < bCol; c++ ){              // всі стовпчики
            let i = bCol * r + c;                   // кожну клітинку 
            if (board[r][c]==0) {
                elBoard[i].className = '';
            } else {
                elBoard[i].className = 'box-' + board[r][c];
            }
        } 
    }   
}

function moveCells( s, d ) {
    board[d[0]][d[1]] = board[s[0]][s[1]];
    board[s[0]][s[1]] = 0;
}
function swapCells( s, d) {
     let t = board[s[0]][s[1]];
     board[s[0]][s[1]] = board[d[0]][d[1]];
     board[d[0]][d[1]] = t;
}

// ========================================================================================

// var board = [
//     [ 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 0, 0, 0, 0 ],
//     [ 0, 0, 1, 0, 0, 0, 0 ],
//     [ 0, 0, 2, 0, 0, 0, 0 ],
//     [ 0, 0, 2, 0, 0, 2, 0 ],
//     [ 0, 0, 1, 0, 1, 1, 0 ],
//     [ 0, 1, 2, 0, 2, 2, 0 ]
// ];