// definicja funkcji ajax
function ajax( method, url ) {
    
  
    // utworzenie obiektu
  
    var httpReq = new XMLHttpRequest();
    
    
    // otwarcie polaczenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
    httpReq.open( method, url );
    
    
    // jesli status polaczenia zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź kod statusu połączenia - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
            if ( httpReq.status == 200 ) {
                
                var returnData = httpReq.responseText;

                console.log(returnData);     
                httpReq.onsuccess(returnData);
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            }   
        }    
    }

    httpReq.onsuccess = function(response) {
        var jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
        var beginOfData = document.createElement('p');
        var endOfData = document.createElement('p');
        
        beginOfData.innerHTML = '<br>---------BEGIN OF DATA-----------<br>';
        endOfData.innerHTML = '<br>---------END OF DATA-----------<br><br><br><br>';
        
        document.body.appendChild(beginOfData);
        
        jsonObj.forEach(function(element, index) {
           var userId = document.createElement('p');
            userId.innerHTML = element.id;
            document.body.appendChild(userId);
            
            var userName = document.createElement('p');
            userName.innerHTML = element.name;
            document.body.appendChild(userName);
            
            var userURL = document.createElement('p');
            userURL.innerHTML = element.email;
            document.body.appendChild(userURL);
        });
        
        document.body.appendChild(endOfData);
        
    }
    
    // wysłanie danych do serwera
    httpReq.send();
}


window.addEventListener('scroll', function() {
    
    
    var docHeight = document.documentElement.offsetHeight;
    
    var offsetY = parseInt(this.pageYOffset + this.innerHeight, 10);
    
    
    
    if (docHeight === offsetY) {
        
        ajax('GET', 'https://jsonplaceholder.typicode.com/users');
    
}});