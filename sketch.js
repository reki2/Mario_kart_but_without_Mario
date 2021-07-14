var playerCount = 0;
var player;
var form;
var database;
var gameState = 0;
var game;

function preload(){carI1 = loadImage("../images/car1.png");
carI2 = loadImage("../images/car2.png");
carI3 = loadImage("../images/car3.png");
carI4 = loadImage("../images/car4.png");
piso = loadImage("../images/ground.png");
trackI = loadImage("../images/track.jpg");}

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





    drawSprites();
}