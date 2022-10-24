var player;
var obstaculos, grupoDeObstaculos;
var aveIMG2

function preload(){
  aveIMG2 = loadImage("./imagens/ave2.jpg");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  player = createSprite(50, 150, 25, 50);
  player.shapeColor = "red";

  grupoDeObstaculos= new Group();
}

function draw(){
  background("gray");

  gerarObstaculos();

  drawSprites();
}

function gerarObstaculos(){
  var rand = Math.round(random(50,100));

  if(frameCount% rand === 0){
    obstaculos = createSprite(width, 150, 15, 15);
    obstaculos.addImage(aveIMG2);
    obstaculos.velocityX = -5;
    obstaculos.shapeColor = "black"

    grupoDeObstaculos.add(obstaculos);
  }
}