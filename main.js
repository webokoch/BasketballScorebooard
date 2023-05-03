let score = {
    home: 0,
    guest: 0
}

const btns = document.querySelectorAll(".btn")
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const newGameBtn = document.getElementById("new-game")

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const pointsToAdd = event.target.innerHTML
        
        if (event.target.closest(".buttons-home")) {
            addPointsHome(pointsToAdd)
        } else {
            addPointsGuest(pointsToAdd)
        }
        renderScore()
    })
})

newGameBtn.addEventListener('click', () => {
    score = {
        home: 0,
        guest: 0
    }
    renderScore()
})

const addPointsHome = points => {
    
    switch (points) {
        case "+1":
            score.home += 1
        break
        case "+2":
            score.home += 2
        break
        case "+3":
            score.home += 3
        break
        default:
            return score.home
    }
}

const addPointsGuest = points => {

    switch (points) {
        case "+1":
            score.guest += 1           
        break
        case "+2":
            score.guest += 2            
        break
        case "+3":
            score.guest += 3         
        break
        default:
            return score.guest
    }
}

const renderScore = () => {
    homeScore.innerHTML = score.home
    guestScore.innerHTML = score.guest
}

