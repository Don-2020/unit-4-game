$(document).ready(function () {
    var win = 0;
    var lose = 0;
    var playerTotal = 0;

    $('#getWins').text(win);
    $('#getLosses').text(lose);

    var randNum = Math.floor(Math.random() * 9999 + 12);

    $('#randomNum').text(randNum);

    var stone1 = Math.floor(Math.random() * 11 + 1);
    var stone2 = Math.floor(Math.random() * 11 + 1);
    var stone3 = Math.floor(Math.random() * 11 + 1);
    var stone4 = Math.floor(Math.random() * 11 + 1);

    $('#red').on('click', function () {
        playerTotal = playerTotal + stone1;
        $('#finalTotal').text(playerTotal); 
         
    })
    $('#blue').on('click', function () {
        playerTotal = playerTotal + stone2;
        $('#finalTotal').text(playerTotal);
    })
    $('#purple').on('click', function () {
        playerTotal = playerTotal + stone3;
        $('#finalTotal').text(playerTotal);
    })
    $('#green').on('click', function () {
        playerTotal = playerTotal + stone4;
        $('#finalTotal').text(playerTotal);
    })
})