window.addEventListener( 'load', init )

function init ( ev ) {
    console.log( "Hola" )
}

function addProjectToMenu ( title, url, enabled = true ) {
    if ( !enabled ) return
    const li = document.createElement( 'li' )
    const a = document.createElement( 'a' )
    a.innerText = title
    a.href = `/${url}`
    li.appendChild( a )
    e( 'menu' ).appendChild( li )
}

function e ( id ) {
    return document.getElementById( id )
}
