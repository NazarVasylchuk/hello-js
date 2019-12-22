var bRow = 8;
var bCol = 7;

var board = [
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 1, 1, 0, 1, 0, 0 ]
];

var elBoard = document.querySelectorAll( 'table#move-the-box td' );

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


var selBox = [];

function boardClick(e){
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    selBox = [];
    if( board[r][c] > 0 ) {
        selBox = [ r, c ];
    }
}
drawBoard();

function moveUp() {

}
function moveDown() {
    
}
function moveLeft() {
    if ( selBox.length>0 && selBox[1]>0 ) {
        let r = selBox[0];
        let c = selBox[1];
        if ( board[r][c-1] == 0 ) {
            board[r][c-1] = board[r][c];
            board[r][c] = 0;
        } else {
            let t = board[r][c];
            board[r][c] = board[r][c-1];
            board[r][c-1] = t;
        }
        selBox = [];
        drawBoard();
    }

}
function moveRight() {
    
}

drawBoard();

