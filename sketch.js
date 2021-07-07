var ball;
var ball_position, database,position;

function setup(){
    createCanvas(500,500);
    //conexion a la base de datos
    database = firebase.database();
    
    //se da una referencia de la base de datos
    ball_position = database.ref('ball/position')
    ball_position.on('value',readPosition); 
    ball = createSprite(ball_position.x,ball_position.y,10,10);
    ball.shapeColor = "red"; 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //la conexion de la base, hace cambios instantaneamente
    database.ref('ball/position').set({
        'x': position.x + x, 'y': position.y + y
    })
}
//le la posicion y se la manda a la base de datos
function readPosition(data){
position = data.val();
console.log(position.y);
ball.x = position.x;
ball.y = position.y;
}