$(document).ready(function () {
    var win = 0;
    var loss = 0;
    var playerTotal = 0;

    $('#getWins').text(win);
    $('#getLosses').text(loss);
    $('#finalTotal').text(playerTotal);

    var randNum = Math.floor(Math.random() * 119 + 12);

    $('#randomNum').text(randNum);

    var stone1 = Math.floor(Math.random() * 11 + 1);
    var stone2 = Math.floor(Math.random() * 11 + 1);
    var stone3 = Math.floor(Math.random() * 11 + 1);
    var stone4 = Math.floor(Math.random() * 11 + 1);

    function Winner() {
        alert("You won! You beat Thanos!!!");
        win++;
        $('#win-loss-tracker').html("<h7>WINNER!!!</h7>");
        $('#getWins').text(win);
        reset();
    }
    function Loser() {
        // alert("YOU LOSS!!! Now Thanos has snap away half the population!!");
        loss++;
        // $('#coin-image').html("<img src='assets\images\snap.gif' />");
        $('#win-loss-tracker').html("<h7>LOSER!!!</h7>");
        $('#getLosses').text(loss);
        reset();
    }
    function reset() {
    randNum=Math.floor(Math.random()*101+19);
    
      $('#randomNum').text(randNum);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      playerTotal= 0;
      $('#finalTotal').text(playerTotal);
      
    }
    function endGame() {
        if (playerTotal === randNum) {
            Winner();
            // reset();
        }
        else if (playerTotal > randNum) {
            Loser();
            reset();
        }
    }


    $('#red').on('click', function () {
        playerTotal = playerTotal + stone1;
        $('#finalTotal').text(playerTotal);
        endGame();


    })
    $('#blue').on('click', function () {
        playerTotal = playerTotal + stone2;
        $('#finalTotal').text(playerTotal);
        endGame();
    })
    $('#purple').on('click', function () {
        playerTotal = playerTotal + stone3;
        $('#finalTotal').text(playerTotal);
        endGame();
    })
    $('#green').on('click', function () {
        playerTotal = playerTotal + stone4;
        $('#finalTotal').text(playerTotal);
        endGame();
    })
})