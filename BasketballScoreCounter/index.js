let geustScore = 0
let homeScore = 0

let guestScoreEl = document.getElementById("guest-el")
let homeScoreEl = document.getElementById("home-el")

function guestAdd1() {
    geustScore += 1
    guestScoreEl.textContent = geustScore
}
function guestAdd2() {
    geustScore += 2
    guestScoreEl.textContent = geustScore
}
function guestAdd3() {
    geustScore += 3
    guestScoreEl.textContent = geustScore
}

function homeAdd1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homeAdd2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeAdd3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
