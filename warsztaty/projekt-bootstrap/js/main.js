window.addEventListener('scroll', function() {
    console.log('123');
    
// zmienna y = pozycja scrola od top body
    var y = window.pageYOffset;
    
    
// zmienna navHeight = 
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    var headerHeight = document.getElementById('main-header').offsetHeight;
    
    if (y >= navHeight) {
        document.getElementById('main-nav').classList.add('transparent');
    } else {
        document.getElementById('main-nav').classList.remove('transparent');
    }
    
    if(y >= headerHeight ) {
        
        var bgPos = -((y - headerHeight)/ 3);
        
        document.getElementById('background').style.backgroundPosition = bgPos + 'px' + ' 0';
    }
    
    
    console.log(headerHeight);
    console.log(y);
    
});