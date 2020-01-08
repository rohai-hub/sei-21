console.log("game!")


// Game timer
var second = 0, minute = 0, hour = 0;
var timer = document.querySelector('.timer');
var interval;
var card = document.querySelectorAll('.cardz');//selects element
console.log(card)








card.forEach(function(item){
         item.addEventListener('click', function(){ //adds eventlistener to element on click
        console.log('yay')
        item.classList.toggle('is-flipped');//flips element

        var autoShow = setTimeout(function() {//auto undo flip in 2secs
            item.classList.toggle('is-flipped');
        }, 2000);
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

document.body.addEventListener("click", startTimer);