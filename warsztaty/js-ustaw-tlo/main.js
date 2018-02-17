function ustawTlo() {
    var allParagraps = document.getElementsByTagName("p");
    
    allParagraps[0].style.backgroundColor = "red";
    allParagraps[1].style.backgroundColor = "blue";
}

var formularz = document.getElementsByTagName("form");

document.getElementById( "formularz" ).addEventListener( 'submit', function(e){
e.preventDefault();
console.log();
} );