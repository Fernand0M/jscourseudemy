/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent
//console.log(x);

document.querySelector(".dice").style.display = "none";
var score0 = document.querySelector('#score-0 ');
var score1 = document.querySelector("#score-1");
var current = document.querySelector('#current-'+ activePlayer);
var current1 = document.querySelector("#current-1");

score0.textContent = "0";
score1.textContent = "0";
current.textContent = "0";
current1.textContent = "0";

/*
function bnt(){
 // Do something here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn);_
*/

// Anonymus function
document.querySelector(".btn-roll").addEventListener("click", function () {
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    // Update the value if the value is NOT 1

    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }else{
     nextplayer();
    }
})

document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer] += roundScore
    document.querySelector('#score-'+ activePlayer).textContent =  scores[activePlayer];
    console.log(scores[activePlayer]);
    if (scores[activePlayer]>=25){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active')
    } else{
        nextplayer();
    }
    
})


function nextplayer(){

activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
roundScore = 0;
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active')
document.querySelector('.player-1-panel').classList.toggle('active')
document.querySelector('.dice').style.display = 'none';

}

document.querySelector(".btn-new").addEventListener("click", function(){
    score0.textContent = "0";
    score1.textContent = "0";
    current.textContent = "0";
    current1.textContent = "0";
   
})
