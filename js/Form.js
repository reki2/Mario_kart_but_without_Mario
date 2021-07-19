class Form {
constructor(){
this.title = createElement('h2')
this.input = createInput('name')
this.button = createButton('play')
this.hello = createElement('h3')
}

display(){
this.title.html("Mario Kart but without Mario");
this.title.position(displayWidth/12,30)
this.input.position(displayWidth/12,170)
this.button.position(displayWidth/12.6,displayHeight/6)
this.button.mousePressed(()=> {
 this.input.hide();
 this.button.hide();
 playerCount = playerCount + 1;
player.index = playerCount;
player.updateCount(playerCount);
console.log(playerCount);
player.name = this.input.value();
player.update();
this.hello.html('Hello ' + player.name);
this.hello.position(600,200);
});
}
}