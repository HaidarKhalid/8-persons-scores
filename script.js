let inpEl = document.querySelector(".inp-num").value

let persons;

let root = document.getElementById("root")

let inpu = document.querySelector(".inp-num")

inpu.addEventListener("keydown", (e)=> {
    if (e.key == "Enter") {
        show()
    } else {
        return
    }
})
class Player {
    constructor(score, number) {
        this.score = score
        this.number = number
    }
}
function show() {
    inpEl = document.querySelector(".inp-num").value
    if (inpEl > 8) {
        persons = 8
    } else if (inpEl < 1) {
        persons = 1
    } else {
        persons = inpEl
    }

    root.innerHTML = ""

    addPlayers()
}



let added = 0;
let x = []
function addPlayers() {


    if (persons > added) {

    added++
        
    x.push(new Player(0, added))

        root.innerHTML += `
        <div class="player">
            <h3>player ${x[added - 1].number}</h3>
            <p >score: <span id="score${x[added - 1].number}">0</span></p>
            <button class="inc" onclick="add(${x[added - 1].number})">Increase</button>
            <button class="dec" onclick="minus(${x[added - 1].number})">Decrease</button>
            <button class="reset" onclick="reset(${x[added - 1].number})">Reset</button>
        </div>`
        

        addPlayers() 

    } else {
        console.log(x)
        root.innerHTML += `
        <br>
        <br>
        <br>
        <button onclick="refresh()" class="refresh-btn"><span class="refresh-text">Main menu</span></button>
        `
    }
}








function add(num) {
     document.getElementById(`score${num}`).innerText = x[num - 1].score += 1
}
function minus(num) {
     document.getElementById(`score${num}`).innerText = x[num - 1].score -= 1
}
function reset(num) {
    document.getElementById(`score${num}`).innerText = x[num - 1].score = 0
}

function refresh() {
    location.reload()
}