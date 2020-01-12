console.log("game!")

// Game timer
var second = 59, minute = 1, hour = 0;
var timer = document.querySelector('.timer');
var interval;

//flipping
var card = document.querySelectorAll('.cardz');//selects element
console.log(card)

//start game
var start = document.querySelector('#reset-button');

//reset game
var retry = document.getElementById('retry');

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

var autoShow;

var myCards2 = document.querySelectorAll('card__face--back');

var score = 0;
var scoreCounter = document.getElementById('score');

//------------------eventlisteners---------------------//

document.body.onload = pageLoads();
start.addEventListener("click", startGame);
retry.addEventListener('click', reset);


//------------------------------ALL functions---------------------//

function startGame(){
            cards = shuffle(cardsArray);
            scoreCounter.innerHTML = "Score = 0";
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

//--------------RESET & RETRY ----------------------------------------//

function reset(){
    location.reload();
}

//-------------if cards matched --------------------------------------//

function matching(){
            clearTimeout(autoShow);
            clearTimeout(autoShow);
            disableCard();
            cardsOpen[0].classList.add('matching','disabled');
            cardsOpen[1].classList.add('matching','disabled');
            cardsOpen = [];
            countScore();

}

//-------------if cards doesnt match --------------------------------------//

function notmatching(){
            cardsOpen = [];
    }

//-----------------score Counter ------------------------------------------//

function countScore(){
            score = score + 10;
            scoreCounter.innerHTML = "Score = "+ score;

}

//--------------startTimer------------------------------------------------//
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
            timesUp();

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

//----------------when Times UP -------------------------------------//

function timesUp(){
            setTimeout(function(){
            var cardDecks = document.querySelectorAll('.card-deck');
            cardDecks.forEach(function(hide){
                hide.style.display = "none";
            });
            var popup = document.getElementById('popup');
                popup.style.display = "block";
            var footer = document.querySelector('footer');
                footer.remove();
            var tryagain = document.getElementById('tryagain');
                tryagain.addEventListener('click',function(){
                    location.reload();
                })

        }, 2000);
}

//-----------------when page loads ----------------------------------//

function pageLoads(){
            var clickHere = document.getElementById('clickstart');
                clickHere.style.display = "block";

            setTimeout(function(){
                clickHere.style.display = "none";
        }, 5000);
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



