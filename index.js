//randomize our cards
let firstCard = Math.floor(Math.random() * 12) + 1;
let secondCard = Math.floor(Math.random() * 12) + 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
    //show sum content on our page
    sumEl.textContent  = `Sum: ${sum}`
        if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    //show message content on our page
    messageEl.textContent = message;
}

function newCard() {
    //get new random card
    let newCard = Math.floor(Math.random() * 12) + 1;
    //add new random card to current sum
    sum += newCard;
    //run startGame function
    renderGame();
}

