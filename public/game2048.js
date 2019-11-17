const boardSize = 4;

var board = [
    [ 0, 0 , 0, 0 ],
    [ 0, 2 , 0, 0 ],
    [ 0, 0 , 2, 2 ],
    [ 0, 2 , 0, 0 ],
];

var elBoard = document.querySelectorAll( 'table#game2048 td' );

function drawBoard() {
    for ( let r=0; r < boardSize; r++ ) {                // всі рядки
        for ( let c=0; c < boardSize; c++){              // всі стовпчики
            let i = boardSize * r +c;                   // кожну клітинку 
            if ( board[ r ][ c ] > 0 ) {               //число > 0????
             elBoard[ i ].innerText = board[ r ][ c ];//замінити
            } else {
             elBoard[ i ].innerText = '';            // очистити
            }
            
         } 
     }
        
} 

drawBoard();

// [ 0, 0, 0, 0]
// 1) всі клітинки без останньої ( c )
// 2) 0 ? (так)
//      2.1) вправо ? > 0 ( cNe0 )
//      2.2) ( c ) = ( cNe0 ); ( cNe0 ) = 0
// 3) вправо = c ? так ( cEq )
//      3.1) ( c ) += ( cEq ); ( cEq = 0 )     
   