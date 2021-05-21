var canvas;
var Image7,Image1,Image2,Image3,Image4,Image5,Image6;
var jerry,tom;
var garden;
 






function preload() {    
    //load the images here
  
garden = loadImage("images/garden.png");
  
Image7 = loadAnimation("images/cat1.png");
Image1 = loadAnimation("images/mouse1.png");
Image3 = loadAnimation("images/mouse2.png","images/mouse3.png");
Image4 = loadAnimation("images/cat2.png","images/cat3.png");
Image5 = loadAnimation("images/mouse4.png");
Image6 = loadAnimation("images/cat4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite (850,600);
    tom.addAnimation("tomsleeping",Image7);
    tom.scale = 0.2;

    jerry = createSprite (200,600);
    jerry.addAnimation("jerrystanding",Image1);
    jerry.scale = 0.15;

    
                      
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide


if(tom.x - jerry.x < (tom.width - jerry.width)/2){
   tom.addAnimation("tomendImage",Image6);
   tom.changeAnimation("tomendImage");
   tom.scale = 0.2
   tom.x = 300;
   tom.velocityX = 0;

   jerry.addAnimation("jerryendImage",Image5);
   jerry.changeAnimation("jerryendImage");
   jerry.scale = 0.15;

}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){

   tom.addAnimation("tomrunning",Image4);
   tom.changeAnimation("tomrunning");
   tom.velocityX = -4;
   
   jerry.addAnimation("jerryrun",Image3);
   jerry.changeAnimation("jerryrun");
   

   }


}
