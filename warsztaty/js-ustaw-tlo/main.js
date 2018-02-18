function ustawTlo() {
    var allParagraps = document.getElementsByTagName("p");
    
    allParagraps[0].style.backgroundColor = "red";
    allParagraps[1].style.backgroundColor = "blue";
}

function pobierzImie(event) {
    event.preventDefault();
    
    var form = document.getElementById("formularz");
//    console.log(form);
    for(var i = 0; i < form.length; i++) {
//        console.log(form.elements[i].value);
        if(form.elements[i].value != 'Submit') {
            console.log(form.elements[i].value);
        }
    }
}