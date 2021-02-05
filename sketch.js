var cat,catimg,catimg1,catimg2
var mouse,mouseimg1,mouseimg2,mouseimg3
var ground,groundimg

function preload() {
  catimg = loadAnimation("images/cat1.png") 
  catimg1 = loadAnimation("images/cat2.png","images/cat3.png")
  catimg2 = loadAnimation("images/cat4.png")
   mouseimg1 = loadAnimation("images/mouse1.png")
   mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
   mouseimg3 = loadAnimation("images/mouse4.png")
  groundimg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
 cat = createSprite(870,600)  
 cat.addAnimation("tomSleeping",catimg)
 cat.scale = 0.2

 mouse = createSprite(200,600)
mouse.addAnimation("standing",mouseimg1)
mouse.scale = 0.2
}

function draw() {

    background(groundimg);
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX = 0
     cat.addAnimation("lastimg",catimg2)
     cat.x = 300
     cat.scale = 0.2
     cat.changeAnimation("lastimg")
    mouse.addAnimation("last",mouseimg3)
    mouse.scale = 0.2
    mouse.changeAnimation("last")
   }
   





    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("running",catimg1)
    cat.changeAnimation("running")
    mouse.addAnimation("cheese",mouseimg2)
    mouse.frameDelay=25
    mouse.changeAnimation("cheese")
  }



}
