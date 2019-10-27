function playS( id ) {
        const audio = document.getElementById( 'snd' +id );
        const divkey = document.getElementById( 'k' +id);
        audio.currenTime = 0;
        audio.play();
        divkey.className='active';
}

function clearS( id ) {
    const divkey = document.getElementById( 'k' +id);
    divkey.className = '';
}



function myKeysDw( e ) {
    switch ( e.keyCode ) {
         case 65: playS('01' );
         case 83: playS('02' );
         case 68: playS('03' );
         case 70: playS('04' );
         case 71: playS('05' );
             break;
           default:  console.log( e );
             break;
     }
 }

 function myKeysUp( e ) {
    switch( e.keyCode ) {
        case 65: clearS('01' ); break;
        case 83: clearS('02' ); break;
        default:  console.log( e ); break;
    }
 }
 
 