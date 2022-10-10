let score1 = 0
let score2 = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


function addOneHome() {
  score1 = score1 + 1 
  homeScore.textContent = score1 
}

function addTwoHome() {
    score1 = score1 + 2 
    homeScore.textContent = score1
}

function addThreeHome() {
    score1 = score1 + 3
    homeScore.textContent = score1
}

function addOneGuest() {
  score2 = score2 + 1 
  guestScore.textContent = score2 
}

function addTwoGuest() {
    score2 = score2 + 2 
    guestScore.textContent = score2
}

function addThreeGuest() {
    score2 = score2 + 3
    guestScore.textContent = score2
}