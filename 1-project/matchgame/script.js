console.log("game!")

/*----- constants -----*/


// var btn = document.querySelectorAll('.card');
// // console.log(btn);
// for (var i = 0; i < btn.length; i++){
// var btns = btn[i];
// // console.log(btns);
// btns.addEventListener('click', function(){

// var cardFrontArray = document.querySelectorAll('#front');


// for (var j = 0; j < cardFrontArray.length; j++) {
//     // console.log(cardFrontArray[j]);
//     var backCard = document.querySelectorAll('#back');

//     // document.querySelector('#front').style.display = 'none';
//     // document.querySelector('#back').style.display = 'block';
//     cardFrontArray[j].style.display = 'none';
//     backCard[j].style.display = 'block';
//     // console.log(backCard.length);
// var autoShowFront = setTimeout(function() {
//     document.querySelector('#front').style.display = 'block';
//     document.querySelector('#back').style.display = 'none';;
// }, 2000);
// }
// // console.log(cardFrontArray);

// })
// }

// var displayCard = function(){
//     card.classList.toggle('do-flip');

// }


var card = document.querySelectorAll('.cardz');
console.log(card)

card.forEach(function(item){
    item.addEventListener('click', function(){
        console.log('yay')
        // var i = 0;
        // var flipCard = document.querySelector('.flip-card');
        // var flipCardArr = flipCard[i];
        // console.log( flipCardArr);
        // var i = 0;
        // var cards = card[i];
        // console.log(card[i]);
        // card.forEach(function(flip){
        item.classList.toggle('is-flipped');


        var autoShow = setTimeout(function() {
            item.classList.toggle('is-flipped');
        }, 2000);
    })
})


