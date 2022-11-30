let inpEl = document.querySelector(".inp-num").value
let persons;
let root = document.getElementById("root")


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
var added = 0;
var score =  [];
function addPlayers() {
    if (persons > added) {
    added++
        root.innerHTML += `
        <div class="player">
            <h3>player ${added}</h3>
            <p >score: <span id="score${added}">0</span></p>
            <button class="inc" onclick="add(${added})">Increase</button>
            <button class="dec" onclick="minus(${added})">Decrease</button>
            <button class="reset" onclick="reset(${added})">Reset</button>
        </div>`
    score.push(0)
    addPlayers() 
    } else {
        console.log(added)
        console.log(score)
    }
}

function add(num) {
     document.getElementById(`score${num}`).innerText = score[num - 1] += 1
}
function minus(num) {
     document.getElementById(`score${num}`).innerText = score[num - 1] -= 1
}
function reset(num) {
    document.getElementById(`score${num}`).innerText = score[num - 1] = 0
}