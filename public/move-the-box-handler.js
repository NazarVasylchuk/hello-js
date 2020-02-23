var selBox = [];


function mouseOver( e ) {
    // logs( $(e.target ).offset() );
    let r = e.target.parentNode.rowIndex;
    let c = e.target.cellIndex;
    let offS = $( e.target ).offset();
    if (board[r][c]>0) {
        $( 'div#buttons' )
            .show()
            .css(offS);
        selBox = [ r, c ]    
    } else {
        $( 'div#buttons' )
            .hide()
            .css( offS );
        selBox = [ ]
            
    }
}


function moveUp() {
    logs( 'UP' );
}
function moveLeft() {
    logs( 'LEFT' );
}
function moveRight() {
    logs( 'RIGHT' );
}
function moveDown() {
    logs( 'DOWN' );
}
function logs( msg ) {
    console.log( msg, selBox );
}



// function boardClick(e){
//     let r = e.target.parentNode.rowIndex;
//     let c = e.target.cellIndex;
//     selBox = [];
//     if( board[r][c] > 0 ) {
//         selBox = [ r, c ];
//     }
// }