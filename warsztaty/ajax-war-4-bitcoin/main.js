$(document).ready(function () {
    console.log("ready!");


    function porownanie() {

        var buyArrow = $('#buy-arrow');
        var currentBuyPrice = parseFloat($('#buy').html())

        var sellArrow = $('#sell-arrow');
        var currentSellPrice = parseFloat($('#sell').html())

        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            console.log(data);

            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);

            if (currentBuyPrice > parseFloat(data.PLN.buy)) {
                buyArrow.removeAttr('class').addClass('fa fa-arrow-down');
            } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
                buyArrow.removeAttr('class').addClass('fa fa-arrow-up');
            } else {
                buyArrow.removeAttr('class').addClass('fa fa-minus-square-o');
            }


            if (currentSellPrice > parseFloat(data.PLN.sell)) {
                sellArrow.removeAttr('class').addClass('fa fa-arrow-down');
            } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
                sellArrow.removeAttr('class').addClass('fa fa-arrow-up');
            } else {
                sellArrow.removeAttr('class').addClass('fa fa-minus-square-o');
            }

        });
        console.log('odswiezono');
    }
    
    setInterval(porownanie, 5000);

});



