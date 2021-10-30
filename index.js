let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = '';
let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  }

  return randomCard;
}

function newGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] += ' ';
  }

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
  if (sum < 21) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
