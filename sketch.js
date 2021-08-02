var river, riverImg, road, roadImg, frog, frogImg;
var car, carImg, cycle, cycleImg, bus, busImg, log, logImg, log2, log2Img, car2, car2Img, home, homeImg;
var home, home2Img, cycleGroup, car34, car35, car1Group, car2Group, busesGroup, logGroup;
var gameState=0;
var lives=3;
var life, life2, life3,  lifeImg;
function preload()
{
  riverImg=loadImage("river.jpg");
  roadImg= loadImage("road.jpg");
  frogImg= loadImage("Frog_Img.png");
  carImg= loadImage("car.png");
  cycleImg=loadImage("cycle.png");
  busImg= loadImage("bus.png");
  logImg= loadImage("log2.png");
  log2Img= loadImage("log3.png");
  car2Img= loadImage("car2.png");
  homeImg= loadImage("home.png");
  home2Img=loadImage("home.png");
  car34= loadImage("car32.png");
  car35= loadImage("car3.png");
  lifeImg= loadImage("heart_1.png");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  river= createSprite(displayWidth/2, displayHeight/2-200, 50, 50);
  river.addImage(riverImg);
  river.scale=1.5;
  road= createSprite(displayWidth/2, displayHeight/2+500, 50,50);
  road.addImage(roadImg);
  road.scale=1.5;
  frog= createSprite(displayWidth/2-235, displayHeight/2+320, 50, 50);
  frog.addImage(frogImg);
  frog.scale=0.42;
  life= createSprite(1042,136, 20,20 );
  life.addImage(lifeImg);
  life.scale=0.5
  life2= createSprite(1160,136, 20,20 );
  life2.addImage(lifeImg);
  life2.scale=0.5
  life3= createSprite(1278,136, 20,20 );
  life3.addImage(lifeImg);
  life3.scale=0.5
  
  bus= createSprite(displayWidth/2+1050, displayHeight/2+65, 50, 50);
  bus.addImage(busImg);
  bus.scale=0.55;
  log= createSprite(displayWidth/10, displayHeight/9+60, 50,50);
  log.addImage(logImg);
  log.scale=0.35;
  log2= createSprite(displayWidth/2+500, displayHeight/2-110, 50,50);
  log2.addImage(log2Img);
  log2.scale=0.35;
  car2= createSprite(displayWidth/2-1000, displayHeight/2+285, 50, 50);
  car2.addImage(car2Img);
  car2.scale=0.75;
  home= createSprite(displayWidth/2-200, displayHeight/17-10, 50, 50);
  home.addImage(homeImg);
  home.scale=2;
  home2= createSprite(displayWidth/2+619, displayHeight/17-10, 50, 50);
  home2.addImage(homeImg);
  home2.scale=2;

  cycleGroup= new Group();
  car1Group= new Group();
  car2Group= new Group();
  busesGroup= new Group();
  logGroup= new Group();
}

function draw() 
{
  background(51);
  
  if(frog.isTouching(car1Group)|| frog.isTouching(car2Group)||frog.isTouching(busesGroup)||frog.isTouching(cycleGroup)){
    gameState=1;
    lives= lives-1;
    console.log(lives);
  }
  if(gameState===1){
    frog.x=displayWidth/2-235; 
    frog.y=displayHeight/2+320
  }

  if(lives===2){
    life3.destroy();
  }
  if(lives===1){
    life2.destroy();
  }
  if(lives===0){
    life.destroy();
  }



  home.depth= frog.depth;
  frog.depth= frog.depth+1;
  home2.depth= frog.depth;
  frog.depth= frog.depth+1;

  if(frameCount%100===0){
    cars();
  }
  if(frameCount%250===0){
    cycles();
  }
  if(frameCount%150===0){
    cars2();
  }
  if(frameCount%650===0){
    buses();
  }
  if(frameCount%100===0){
  logs();
  }
  
  console.log(mouseX, mouseY);


  if(keyDown(LEFT_ARROW)){
    frog.x= frog.x-10;
    
  }
  else if(keyDown(RIGHT_ARROW)){
    frog.x= frog.x+10;
  }
  else if(keyDown(UP_ARROW)){
    frog.y=frog.y-10;
  }
  else{
    frog.y=frog.y+10;
  }

  

  
  car2.velocityX= 8;
  //cycle.velocityX=-10;
  bus.velocityX= -5;
  log.velocityX= 5;
  log2.velocityX= -5;
  
  drawSprites();
}

function cars(){
  var car1=createSprite(0,displayHeight/2+285,10,10);
  
  car1.velocityX=10;
  car1.scale=0.45
  var rand2= Math.round(random(1,2))
  switch(rand2){
    case 1: car1.addImage(carImg);
      break;
      case 2: car1.addImage(car2Img);
      car1.scale=0.75
      break;
      
      default: break;
  }
  
  car1Group.add(car1);
  
}

function cars2(){
  var car2=createSprite(displayWidth/2+500,displayHeight/2+65,10,10);
  
  car2.velocityX=-10;
  car2.scale=0.45
  var rand3= Math.round(random(1,2))
  switch(rand3){
    case 1: car2.addImage(car34);
    car2.scale=0.65;
      break;
      case 2: car2.addImage(car35);
      car2.scale=0.45;
      break;
      
      default: break;
  }
  
 car2Group.add(car2);
  
}



function cycles(){
 var cycle1= createSprite(displayWidth/2+500, displayHeight/2+65, 50,50);

 cycle1.velocityX= -10;
 cycle1.scale= 0.6;
 cycle1.addImage(cycleImg);
 cycleGroup.add(cycle1);

}

function buses(){
  var bus1 = createSprite(displayWidth/2+1050, displayHeight/2+65, 50, 50);
  bus1.velocityX= -10;
  bus1.addImage(busImg);
  busesGroup.add(bus1);
  bus1.scale=0.57;
}

function logs(){
  log1= createSprite(displayWidth/10, Math.round(random(displayHeight/9+60,displayHeight/2-90 )), 50,50);
  log1.addImage(logImg);
  log1.scale=0.35;
  log1.velocityX= 4;
  var rand4= Math.round(random(1,2))
  switch(rand4){
    case 1: log1.addImage(logImg);
    log1.scale=0.35;
      break;
      case 2: log1.addImage(log2Img);
      car2.scale=0.35;
      break;
      
      default: break;
  }

}
