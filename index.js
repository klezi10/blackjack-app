let firstCard = 11;
let secondCard = 7;
let isAlive = true;
let hasBlackjack = false;
let message = '';
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let sum = firstCard + secondCard;

function newGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard;
  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 6;
  sum += card;
  renderGame();
}
