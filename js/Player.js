class Player {
    constructor(){
    this.index = null;
    this.name = null;
    
    }
 getCount(){
     var playerCount_RO = database.ref('playerCount');
     playerCount_RO.on('value', function(data){
        playerCount = data.val();
     })
 console.log('soda')
    }
updateCount(count){
database.ref('/').update({
playerCount: count
})
}

update(){
var playerIndex = 'players/player' +this.index;
database.ref(playerIndex).set({name: this.name})
}
static getPlayerInfo(){
 var playerinfoRef = database.ref('players');
 playerinfoRef.on('value', (data)=>{ allplayers = data.val(); })
 }
}    