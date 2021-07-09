var playerCount;
var player;
var form;
var database;
var gameState = 0;
var game;

function setup(){
    createCanvas(displayWidth-100,displayHeight-100);
    //conexion a la base de datos
    database = firebase.database();
   game = new Game();
   game.getState();
    
}

function draw(){
    background("white");





    drawSprites();
}