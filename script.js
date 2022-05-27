let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let Score = document.querySelector("#Score");
let gameover = document.querySelector("#gameover");


//declar varble for score

let interval = null;
let playScore = 0;

//founctio for score

let scoreCounter = ()=>{
    playScore++;
    Score.innerHTML = 'Score <b>${playScore}</b>';
}

interval = setInterval(scoreCounter,200);