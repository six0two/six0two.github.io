window.addEventListener('scroll', function() {
    console.log('123');
    
// zmienna y = pozycja scrola od top body
    var y = window.pageYOffset;
    
    
// zmienna navHeight = 
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    if (y >= navHeight) {
        document.getElementById('main-nav').classList.add('transparent');
    } else {
        document.getElementById('main-nav').classList.remove('transparent');
    }
    
    
    console.log(headerHeight);
    console.log(y);
    
});

