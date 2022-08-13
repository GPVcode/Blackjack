//randomize our cards
let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
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
       // make this dynamic with for loop.
    cardsEl.textContent = `Cards: `;
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
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
    let newCard = getRandomNumber()
    //add new random card to current sum
    sum += newCard;
    //push newCard to the cards array
    cards.push(newCard);
    console.log(cards);
    //run startGame function
    renderGame();
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log(randomNumber);
    return randomNumber;
}
