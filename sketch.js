var backgroundImage
var soldierImg
var robotImg
var backgroundImage2
var backgroundImage3
var bombImg
var heartImg
var beamImg
var beam
var playerCount
var form, player
var allPlayers, gameState, player1,player2
var players = [];
var obstacles;
var bg;
function preload(){
 backgroundImage = loadImage("Images/Background.jpg")
 backgroundImage2 = loadImage("Images/Background2.jpg")
 backgroundImage3 = loadImage("Images/Background3.jpg")
 soldierImg = loadImage("Images/finalSoldier.png")
 robotImg = loadImage("Images/Robot.png")
 bombImg = loadImage("Images/bomb.png")
 heartImg = loadImage("Images/Heart.png")
 beamImg = loadImage("Images/Beam.jpg")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();
}

function draw() {
  background(backgroundImage);  
  if(playerCount == 2){
    game.update(1)
  }
  if(gameState == 1){
    game.play()
  }
  game.addRobots();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}