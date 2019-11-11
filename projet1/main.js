const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
ctx.fillStyle = 'white';
ctx.font = '18px serif';

// Variables

var score = 0;
//
var Boule = "./Images/scoop2.png"

/*var gameover;
var yumyum;
var raf;
var y1 = 0;
var y2 = 0;
var y3 = 0;*/
var frames = 0;
cup = new Cup();
scoop1 = new Scoop(Boule, 50, 50);
// scoop2 = new Scoop ("./Images/scoop2.png", 100, 100);
// scoop3 = new Scoop ("./Images/scoop3.png", 150, 150);
var arrayscoop = [];

// lance le jeu

document.getElementById("start-button").onclick = function () {
  startGame();
};

// afficher les éléments

function draw() {
  ctx.clearRect(0, 0, W, H);

  if (frames % 90 === 0) {
    var chiffre = Math.random() * 1000;
    var unScoop = new Scoop(Boule, chiffre, 0);
    arrayscoop.push(unScoop);
  };

  arrayscoop.forEach(function (oneScoop, index) {
    oneScoop.y += 2; // on les fait descendre //
    oneScoop.draw(); // affiche

    // pour chacune detecte si collision
    if (oneScoop.hits(cup)) {
  
      // on enleve la boule du arrayscoop
      arrayscoop.splice(index, 1);

      score++;
      cup.changeImg(score);
      
      switch (score) {
        case 1:
          Boule="./Images/scoop1.png"
          // executed code when the expression === value2
          break;
        case 2:
          Boule="./Images/scoop3.png" 
        // executed code when the expression === value3
          break;
        case 3:
            // executed code when the expression === value3
            Boule="./Images/cake.png" 
        break;
        case 4:
          // executed code when the expression === value3
          // saisir code gagné !!!!
        break;
      default:
          // executed code when none of the values match the expression
      }


      
    }
  });

  cup.draw();

};

function animLoop() {
  frames++;

  draw();

  requestAnimationFrame(animLoop);
};

function startGame() {
  gameover = false;
  arrayscoop = [];

  requestAnimationFrame(animLoop);
};

// les éléments bougent

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: cup.moveLeft(); console.log('left', cup); break;
    case 39: cup.moveRight(); console.log('right', cup); break;
  }
};

function clearCanvas() {
  ctx.clearRect(0, 0, 1200, 600);
};

// Obstacles avec la cup

arrayscoop.forEach(function (scoop) {
  scoop.y += 5;
  scoop.draw();
});
