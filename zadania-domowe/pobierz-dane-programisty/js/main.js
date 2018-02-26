//Stwórz stronę zawierającą przycisk pt. "Pobierz dane"
$('button').click(function ()
{

//Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery
$.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
    
//Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".
    $('body').append("<div id='dane-programisty'></div>");
    
    $('#dane-programisty').append('<p>Imię: '+data.imie+'</p>');
    $('#dane-programisty').append('<p>Nazwisko: '+data.nazwisko+'</p>');
    $('#dane-programisty').append('<p>Zawód: '+data.zawod+'</p>');
    $('#dane-programisty').append('<p>Firma: '+data.firma+'</p>');
});

})