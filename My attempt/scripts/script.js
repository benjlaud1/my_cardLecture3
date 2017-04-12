var deck = [
  { number: 1, suit: 'spades' },
  { number: 2, suit: 'spades' },
  { number: 3, suit: 'spades' },
  { number: 4, suit: 'spades' },
  { number: 5, suit: 'spades' },
  { number: 6, suit: 'spades' },
  { number: 7, suit: 'spades' },
  { number: 8, suit: 'spades' },
  { number: 9, suit: 'spades' },
  { number: 10, suit: 'spades' },
  { number: 11, suit: 'spades' },
  { number: 12, suit: 'spades' },
  { number: 13, suit: 'spades' },
  { number: 1, suit: 'diamonds' },
  { number: 2, suit: 'diamonds' },
  { number: 3, suit: 'diamonds' },
  { number: 4, suit: 'diamonds' },
  { number: 5, suit: 'diamonds' },
  { number: 6, suit: 'diamonds' },
  { number: 7, suit: 'diamonds' },
  { number: 8, suit: 'diamonds' },
  { number: 9, suit: 'diamonds' },
  { number: 10, suit: 'diamonds' },
  { number: 11, suit: 'diamonds' },
  { number: 12, suit: 'diamonds' },
  { number: 13, suit: 'diamonds' },
  { number: 1, suit: 'hearts' },
  { number: 2, suit: 'hearts' },
  { number: 3, suit: 'hearts' },
  { number: 4, suit: 'hearts' },
  { number: 5, suit: 'hearts' },
  { number: 6, suit: 'hearts' },
  { number: 7, suit: 'hearts' },
  { number: 8, suit: 'hearts' },
  { number: 9, suit: 'hearts' },
  { number: 10, suit: 'hearts' },
  { number: 11, suit: 'hearts' },
  { number: 12, suit: 'hearts' },
  { number: 13, suit: 'hearts' },
  { number: 1, suit: 'clubs' },
  { number: 2, suit: 'clubs' },
  { number: 3, suit: 'clubs' },
  { number: 4, suit: 'clubs' },
  { number: 5, suit: 'clubs' },
  { number: 6, suit: 'clubs' },
  { number: 7, suit: 'clubs' },
  { number: 8, suit: 'clubs' },
  { number: 9, suit: 'clubs' },
  { number: 10, suit: 'clubs' },
  { number: 11, suit: 'clubs' },
  { number: 12, suit: 'clubs' },
  { number: 13, suit: 'clubs' }
];

$(document).ready( function (){
  // console.log('jq');
  // event listeners
  $('#card-from-top').on('click', cardFromTop);
  $('#card-from-bottom').on('click', cardFromBottom);
  $('#shuffle-deck').on('click', shuffleDeck);
  $('#show-deck').on('click', showDeck);
  $('#hide-deck').on('click', hideDeck);
  $('#draw-random').on('click', drawRandom);


});// end document ready

//functions below:

// function cardFromTop
function cardFromTop () {
  console.log('card-from-top');
  hideDeck();
  $('.all-cards').append("<div class='card " + deck[0].suit + "' data-number='" + deck[0].number + "' data-suit='" + deck[0].suit + "'>" + deck[0].number + "</div>");
  // code example <div class="card spades" data-number='3'>3</div>

} // end cardFromTop

// function cardFromBottom
function cardFromBottom () {
  console.log('card-from-bottom');
  hideDeck();
  $('.all-cards').append("<div class='card " + deck[deck.length-1].suit + "' data-number='" + deck[deck.length-1].number + "' data-suit='" + deck[deck.length-1].suit + "'>" + deck[deck.length-1].number + "</div>");
} // end cardFromBottom

// function drawRandom
function drawRandom () {
  console.log('draw-random');
  hideDeck();
  var randomCard = Math.floor(Math.random() * ( deck.length ));
  $('.all-cards').append("<div class='card " + deck[randomCard].suit + "' data-number='" + deck[randomCard].number + "' data-suit='" + deck[randomCard].suit + "'>" + deck[randomCard].number + "</div>");
} // end drawRandom

//function shuffleDeck
function shuffleDeck () {
  console.log('shuffle-deck');
  hideDeck();
  deck = shuffleArray(deck);
} // end shuffleDeck

// function showDeck
function showDeck () {
  console.log('show-deck');
  hideDeck();
  for (var i = 0; i < deck.length; i++) {
    $('.all-cards').append("<div class='card " + deck[i].suit + "' data-number='" + deck[i].number + "' data-suit='" + deck[i].suit + "'>" + deck[i].number + "</div>");
  }

} // end showDeck

// function hideDeck
function hideDeck () {
  // console.log('hide-deck');
  $('.all-cards').empty();
} // end hideDeck

// function shuffleArray
function shuffleArray (arrayToShuffle) {
  console.log('shuffle-array');
  var currentIndex = arrayToShuffle.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrayToShuffle[currentIndex];
    arrayToShuffle[currentIndex] = arrayToShuffle[randomIndex];
    arrayToShuffle[randomIndex] = temporaryValue;
  }

  return arrayToShuffle;

} // end shuffleArray

$(document).on('click', '.card', function () {
  // console.log('click on card class in document');
  console.log('you clicked on ' + $(this).data('number') + ' of ' + $(this).data('suit'));
}); // end document on click
