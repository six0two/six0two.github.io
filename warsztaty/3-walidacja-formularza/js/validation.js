"use strict";

// zmienne do checkboxów
var ostatniCheck = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var zgodyMarketingowe = document.querySelectorAll('input[type=checkbox]');

//zmienne do inputów

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");


// Funkcja zaznaczania wszystkich checkboxów

function checkboxState() {
    zgodaMarketingowa1.checked = ostatniCheck.checked;
    zgodaMarketingowa2.checked = this.checked;
    
    // dwa różne sposoby osiągnięcia tego samego
    // this wskazuje na element który wyzwolił daną funkcję, w tym przypadku ostatniCheck
    
    zgodaMarketingowa1.disabled = ostatniCheck.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

ostatniCheck.onchange = checkboxState;
// funkcja zaznaczania wszystkich checkboxów

