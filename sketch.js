var playerCount;
var player;
var form;
var database;

function setup(){
    createCanvas(displayWidth-100,displayHeight-100);
    //conexion a la base de datos
    database = firebase.database();
    form = new Form()

    
}

function draw(){
    background("white");
   form.display();




    drawSprites();
}