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

setTimeout(() => {
  console.log("hello");
}, 4000);

function hy(n1, n2) {
  if (n1 == 0 && n2 == 0) {
    console.log("error");
  } else {
    console.log(n1 * n2);
  }
}

hy(20, 39);
interval = setInterval(scoreCounter, 200);
