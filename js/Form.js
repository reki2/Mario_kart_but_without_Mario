class Form {
constructor(){
this.title = createElement('h2')
this.input = createInput('name')
this.button = createButton('play')
}

display(){
this.title.html("Mario Kart but without Mario");
this.title.position(displayWidth/2,40)
this.input.position(displayWidth/2,90)
this.button.position(displayWidth/1.6,displayHeight/7)
this.button.mousePressed(()=> {
//que el jugador se cree cuando presionamos el boton
    
});
}
}