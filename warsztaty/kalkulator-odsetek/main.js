//9.	Powyżej funkcji oblicz() zadeklaruj funkcję obliczZysk(), która jako parametry będzie przyjmować wszystkie zmienne, które zadeklarowałeś powyżej – tj. wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek. 

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek)
{
//10.	Wew. Funkcji obliczZysk() stwórz warunek, który sprawdzi, czy zysk z lokaty jest opodatkowany podatkiem Belki – spełnienie tego warunku ma być uzależnione od wartości zmiennej podatek. 
    if( podatek === true) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }

//11.	Stwórz zmienną kapital, do której przypisz wynik obliczenia kapitału końcowego na podstawie wzoru
    var kapital = wplata * Math.pow(1 + oprocentowanieOpodatkowane / okresKapitalizacji, iloscLat * okresKapitalizacji);
    
    
//12.	Funkcja obliczZys()k ma zwracać wartość zmiennej kapital jako liczbę rzeczywistą dokładnością do dwóch miejsc po przecinku
    return parseFloat(kapital).toFixed(2);
}



//3.	W pliku js stwórz funkcję oblicz() – pozostałe operacje (do punktu 8 włącznie) wykonuj w ciele tej funkcji

function oblicz(e) 
{
    event.preventDefault();
    
//4.	Stwórz zmienna wplata, do które przypisz wartość pola z id ‘wplata’ – upewnij się, że będzie to zmienna liczbowa wykorzystując metodę parseInt()
    var wplata = parseInt(document.getElementById("wplata").value, 10);
    console.log(wplata);
    
//5.	Stwórz zmienną iloscLat analogicznie do zmiennej wplata
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value, 10);
    console.log(iloscLat);
    
//6.	Stwórz zmienną okresKapitalizacji analogicznie do zmiennej wplata
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value, 10);
    console.log(iloscLat);
        
//7.	Stwórz zmienną oprocentowanie przypisując do niej wartość pola z id  ‘oprocentowanie’ podzieloną przez 100
    var oprocentowanie = document.getElementById("oprocentowanie").value / 100 ;
    console.log(oprocentowanie);

//8.	Stwórz zmienną podatek i przypisz do niej wartość true lub false w zależności czy checkbox z id ‘podatek’  jest zaznaczony
    var podatek = document.getElementById('podatek').checked;
    console.log(podatek);
    
//13.	Wew. Funkcji oblicz() stwórz zmienną wynik, do której przypisz wynik działania funkcji obliczZysk(). Podczas wywołania funkcji przekaż do niej wyżej zdefiniowane zmienne z wartościami, które pobrałeś wcześniej z formularza.
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById('wynik').innerText = wynik;

}