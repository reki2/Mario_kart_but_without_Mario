var playerCount = 0;
var player;
var form;
var database;
var gameState = 0;
var game;

var car1, car2, car3, car4, carI1, carI2, carI3, carI4;
var ground, track, piso, trackI
var cars = []

var allplayers

function preload(){
carI1 = loadImage("../images/car1.png");
carI2 = loadImage("../images/car2.png");
carI3 = loadImage("../images/car3.png");
carI4 = loadImage("../images/car4.png");
piso = loadImage("../images/ground.png");
trackI = loadImage("../images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-100,displayHeight-100);
    //conexion a la base de datos
    database = firebase.database();
   game = new Game();
   game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount === 2){
    game.updateState(1)
    clear();
  game.play();
  console.log('zanahoria')
   }
   if(gameState === 1){
    clear();
  game.play();
  console.log('zanahoria')
   }




    drawSprites();
}