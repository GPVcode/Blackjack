//randomize our cards
let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

console.log(cards);
function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
       // Dynamically present numbers as they are drawn using for loop.
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
    if(isAlive === true && hasBlackJack === false){
    //get new random card
    let newCard = getRandomNumber();
    //add new random card to current sum
    sum += newCard;
    //push newCard to the cards array
    cards.push(newCard);
    //run startGame function
    renderGame();
    }
}

//helper function to generate random card numbers
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    //account for face cards
    if(randomNumber > 10){
        return 10;
    }
    if(randomNumber === 1){
        return 11;
    }
    return randomNumber;
}
