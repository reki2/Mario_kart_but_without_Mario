class Player {
    constructor(){
    this.index = null;
    this.name = null;
    this.distance = 0;
    }
 getCount(){
     var playerCount_RO = database.ref('playerCount');
     playerCountRef.on("value",(data)=>{
        playerCount = data.val();
     });
    }
updateCount(count){
database.ref('/').update({
playerCount: count
})
}

update(){
var playerIndex = "players/player" + this.index;
database.ref(playerIndex).set({
name:this.name,
distance:this.distance 
}); 
}
static getPlayerInfo(){
 var playerinfoRef = database.ref('players');
 playerinfoRef.on('value', (data)=>{ allplayers = data.val(); })
 }
}