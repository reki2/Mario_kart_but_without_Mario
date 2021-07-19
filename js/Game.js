class Game {
    constructor(){
    
    
    
    }
    getState(){
   var gameStateRef = database.ref('gameState');
   gameStateRef.on('value', function(data){
       gameState: data.val(); 
     })



    }
    updateState(state){
   database.ref('/').update({
       gameState: state
   })

   

    }
    start(){
    if(gameState === 0){
    player = new Player();
   form = new Form();
 //console.log('sonic');
 form.display();
 }
 //que no se vean desde el inicio
  car1 = createSprite( 410, 700, 20, 20);
  car2 = createSprite( 550, 730, 20, 20);
  //car3 = createSprite( 530, 500, 20, 20);
  //car4 = createSprite( 500, 530, 20, 20);
  car1.addImage("1", carI1);
  car2.addImage("2", carI2);
  //car3.addImage("3", carI3);
  //car4.addImage("4", carI4);
  car1.visible=false;
  car2.visible=false;
  cars = [car1, car2];
    }
    play(){
        form.hide();
        car1.visible = true;
        car2.visible = true;
        Text("let's GOOOO!!!", 200,200)
    }
}