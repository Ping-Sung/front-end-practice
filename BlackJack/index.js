
let hasBlackJack = false
let isAlive = false
let message = ""
let haveAce = false
let sum = 0
let cards = []

let player = {
    name: "Kevin",
    chips: 150
}

let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.querySelector('#player-el')

playerEl.textContent = player.name + ': $' + player.chips

function startGame() {
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    isAlive = true
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack){
        console.log('Drawing a new card from the deck.')
        let card = getRandomCard()
        cards.push(card)
        sum += card
        if (haveAce === true && sum > 21) {
            sum -= 10
            haveAce = false
        }
        console.log(cards)
    renderGame()
    } 
}

function getRandomCard() {
    res = Math.floor((Math.random() * 13) + 1)
    if (res > 10) {
        res = 10
    }else if (res === 1){
        res = 11
        haveAce = true
    }
    return res
}