console.log("game!")


// Game timer
var second = 0, minute = 0, hour = 0;
var timer = document.querySelector('.timer');
var interval;

//flipping
var card = document.querySelectorAll('.cardz');//selects element
console.log(card)

//restart game
var reset = document.querySelector('#reset-button');


var cardsOpen = [];

var cardsArray = [
    { name: "cat", src:"images/cat.jpg", alt:"cat"},
    { name: "bat", src:"images/bat.jpg", alt:"bat"},
    { name: "rat", src:"images/rat.jpg", alt:"rat"},
    { name: "cat", src:"images/cat.jpg", alt:"cat"},
    { name: "rat", src:"images/rat.jpg", alt:"rat"},
    { name: "bat", src:"images/bat.jpg", alt:"bat"},
    { name: "rat", src:"images/rat.jpg", alt:"rat"},
    { name: "cat", src:"images/cat.jpg", alt:"cat"},
    { name: "bat", src:"images/bat.jpg", alt:"bat"}
];
var myCards = document.getElementsByClassName('card__face--back');
var i = 0; // index for cardsArray
var j = 0; //index for div array to place images


//------------------functions---------------------//

function startGame(){
        cards = shuffle(cardsArray);
        console.log(cards);

        for( var i = 0; i < cardsArray.length; i++ ){

            myCards.innerHTML = '';                     //removes existing cards

            var img = document.createElement("img");
            var cardImg = cardsArray[i];

            img.src = cardImg.src;
            console.log(cardImg.src);
            img.alt = cardImg.alt;


            myCards[j].appendChild(img);
            j++;
            };

        startTimer();

}



card.forEach(function(item){
         item.addEventListener('click', function(){ //adds eventlistener to element on click
        console.log('yay')
        item.classList.toggle('is-flipped');//flips element

        var autoShow = setTimeout(function() {//auto undo flip in 2secs
            item.classList.toggle('is-flipped');
        }, 3000);
    })

})

function startTimer() {
        interval = setInterval(function() {
        timer.innerHTML = minute + 'mins ' + second + 'secs';//adds text into div
        second++;
        if (second == 60) {
          minute++;
          second = 0;
        }
        if (minute == 60) {
          hour++;
          minute = 0;
        }
      }, 1000);
}
document.body.onload = startGame();


function resetGame(){
       // Resets timer
        var second = 0;
        var minute = 0;
        var hour = 0;
        var timer = document.querySelector('.timer');
        timer.innerHTML = minute + 'mins ' + second + 'secs';

}
console.log(interval);
reset.addEventListener("click", resetGame);


//shuffles cardsArray
function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

  return array;
}
