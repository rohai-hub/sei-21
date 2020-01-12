console.log("game!")

// Game timer
var second = 59, minute = 0, hour = 0;
var timer = document.querySelector('.timer');
var interval;
//flipping
var card = document.querySelectorAll('.cardz');//selects element
console.log(card)

//restart game
var reset = document.querySelector('#reset-button');

//arrays

var cardsArray = [
    { name: "can", src:"images/can.jpg", alt:"can"},
    { name: "can", src:"images/can.jpg", alt:"can"},
    { name: "cab", src:"images/cab.jpg", alt:"cab"},
    { name: "cab", src:"images/cab.jpg", alt:"cab"},
    { name: "cat", src:"images/cat.jpg", alt:"cat"},
    { name: "cat", src:"images/cat.jpg", alt:"cat"},
    { name: "rat", src:"images/rat.jpg", alt:"rat"},
    { name: "rat", src:"images/rat.jpg", alt:"rat"},
    { name: "bat", src:"images/bat.jpg", alt:"bat"},
    { name: "bat", src:"images/bat.jpg", alt:"bat"},
    { name: "hat", src:"images/hat.jpg", alt:"hat"},
    { name: "hat", src:"images/hat.jpg", alt:"hat"}
];
var myCards = document.getElementsByClassName('card__face--back');
var i = 0; // index for cardsArray
var j = 0; //index for div array to place images

var cardsOpen = []; //empty array to store opened cards

var cardFace = document.querySelectorAll('.card__face');

var autoShow = "";

var myCards2 = document.querySelectorAll('card__face--back');

//------------------eventlisteners---------------------//

// document.body.onload = startGame();
reset.addEventListener("click", startGame);



//------------------------------ALL functions---------------------//

function startGame(){
            cards = shuffle(cardsArray);

            clearInterval(interval);
            console.log(interval);

        for( var i = 0; i < cardsArray.length; i++ ){

            myCards.innerHTML = '';                     //removes existing cards

            var img = document.createElement("img");
            var cardImg = cardsArray[i];

            img.src = cardImg.src;
            // console.log(cardImg.src);
            img.alt = cardImg.alt;
            img.classList.add("test");
            // console.log("done");
            myCards[j].appendChild(img);                   //appends img into div

            j++;
            };


        enableCard();
        startTimer();


//to assign a class to an opened img ----------------------------------

        var imgTarget = document.querySelectorAll('.test');
                console.log(imgTarget);

        imgTarget.forEach(function(target){
            target.addEventListener("mouseleave",openedCard);
            // target.addEventListener("mouseover",openedCard);
    })

//-------------push opened cards into array.----------------------------
//------------- checks if cards are a match or not----------------------

        function openedCard(e){
            // event.target.style.visibility = "hidden";
            event.target.classList.add("imgShown");
            cardsOpen.push(event.target);
            console.log(cardsOpen);
            console.log(cardsOpen[0].alt);
            // console.log(cardsOpen[1].alt);

            if (cardsOpen.length === 2){


                if (cardsOpen[0].alt === cardsOpen[1].alt) {
                    console.log("true");
                    matching();


            } else{
                    notmatching();
            }
      }
    }
}
//-----------------------------END OF STARTGAME FUNCTION --------------------------//


// //to display cards(FLIP)----------------------------------------------

card.forEach(function(item){
            item.addEventListener('click', function(){ //adds eventlistener to element on click
            item.classList.toggle('is-flipped');//flips element
            item.classList.add('disabled');


            autoShow = setTimeout(function() {//auto undo flip in 2.5secs
            item.classList.toggle('is-flipped');
            item.classList.remove('disabled');


            }, 3500);
       })

})


//-------------if cards matched --------------------------------------//

function matching(){
            clearTimeout(autoShow);
            disableCard();
            cardsOpen[0].classList.add('matching','disabled');
            cardsOpen[1].classList.add('matching','disabled');
            cardsOpen = [];

}

//-------------if cards doesnt match --------------------------------------//

function notmatching(){
            cardsOpen = [];
    }


//--------to disable FLIP before Startgame is clicked.--------------------//

function disableCard() {
            card.forEach(function(off){
                    off.classList.add('disabled');
            })
}

function enableCard() {
            card.forEach(function(on){
                    on.classList.remove('disabled');
            })
}

function showAll() {
            card.forEach(function(show){
                    show.classList.add('show');
            })
}

function startTimer() {
            interval = setInterval(function() {
            timer.innerHTML = minute + 'mins ' + second + 'secs';//adds text into div
            second--;

        if (minute === 0 && second === -1){
            timer.innerHTML =  '0mins ' + '0secs';
            clearInterval(interval);
            console.log(interval);
            showAll();
            disableCard();
            timer.classList.remove("blink_me");     //removes blinker
            cardFace.forEach(function(offbl){
                    offbl.classList.remove("blink_me2");
            });

        }

        if (second === -1) {
            minute--;
            second = 60;
        }
        if (minute === 0) {
            hour--;
        }

        if ( second < 10){
            timer.classList.add("blink_me");    //add blinker to timer

            cardFace.forEach(function(bl){
                    bl.classList.add("blink_me2");
            })
        }

      }, 1000);

}

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



