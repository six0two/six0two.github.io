//a.	slideShow = kontener z klasą .slide-show
var slideShow = $('.slide-show');

//b.	slideCount = ilość elementów .single-slide
var slideCount = $('.single-slide').length;

//c.	slideWidth = podziel 100 przez ilość slidów (slideCount)
var slideWidth = 100 / slideCount;

//d.	slideIndex = index slidu początkowego równy 0
var slideIndex = 0;

//2.	Kontenerowi slideShow przypisz za pomocą metody .css() szerokość w procentach (%) - równą ilości slidów razy 100 (np. 5 slidów = 500%)
slideShow.css('width', slideCount * 100 + '%');

//3.	Za pomocą metody .find() znajdź w kontenerze slideShow wszystkie slajdy z klasą .single-slide. Następnie każdemu z tych elementów nadaj szerokość równą szerokości jednego slajdu w prodentach (zmienna slideWidth + ”%”) oraz ustaw lewy margines równy szerokości slajdu w procentach razy index obecnie iterowanego elementu - dla 4 slidów to 100%/5 czyli 25% (do iteracji po elementach wykorzystaj metodę .each() - https://api.jquery.com/each/ )

//$( "li" ).each(function( index ) {
//  console.log( index + ": " + $( this ).text() );
//});

slideShow.find('.single-slide').each(function(index, element) 
{
    $(this).css({
        'width': slideWidth + '%',
        'margin-left': slideWidth * index + '%',
     })
});

//4.	Dla nawigacji (elementy z klasami .prev-slide i .next-slide) przypisz obsługę zdarzenia click. Sprawdź, czy obsługa zdarzenia click działa na tej nawigacji. Następnie wewnątrz funkcji obsługującej zdarzenie click wywołaj funkcję slide() (jej definicja jest w kolejnym punkcie), która przyjmuje parametr slideIndex – 1 jeśli przewijamy w lewo i slideIndex + 1 jeśli przewijamy w prawo.
$('.prev-slide').click(function() 
{
    slide(slideIndex - 1);
});

$('.next-slide').click(function() 
{
    slide(slideIndex + 1);
});


//5.	Zdefiniuj funkcję slide() przyjmującą parametr newSlideIndex, która odpowiada za przewijanie slajdów:
function slide(newSlideIndex) 
{
    
//a.	Sprawdź, czy aktualny newSlideIndex nie jest mniejszy od indexu pierwszego slajdu lub większy od indexu ostatniego slajdu. Jeśli tak, to przerwij działanie funkcji
    if(newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
        return;
    }
    
    
//b.	Zdefiniuj zmienną slideCaption, do której przypisz aktualny napis na slajdzie (elementy z klasą .slide-caption)
    var slideCaption = $('.slide-caption').eq(newSlideIndex);
    
    
//c.	Stwórz zmienną marginLeft, która przyjmie wartość procentową (%) aktualnego indexu slidu pomnożoną przez -100 (o taką wartość marginesu przesuwamy cały rząd ze slajdami)
    var marginLeft = newSlideIndex * (-100) + '%';
    
    
//d.	Ukryj napis znajdujący się w zmiennej slideCaption używając metody .hide()
    slideCaption.hide();
    
    
//e.	Na kontenerze slideShow wykonaj animacje przesuwającą wszystkie slajdy w lewo lub w prawo poprzez ustawienie marginesu – margin-left: marginLeft, nadaj jej czas trwania 800 milisekund i wywołaj funkcję callback (jej opis poniżej)
//f.	Funkcja anonimowa callback ma do zmiennej slideIndex przypisać nowy index slajdu ze zmienne newSlideIndex oraz wyświetlić napis na slidzie (zmienna slideCaption) za pomocą metody .fadeIn()
    slideShow.animate({
        'margin-left': marginLeft,
    }, 800, function() {
        slideIndex = newSlideIndex;
        slideCaption.fadeIn();
    })
}