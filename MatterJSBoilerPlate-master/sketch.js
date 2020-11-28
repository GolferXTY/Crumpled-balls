
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 200, y);

	bin = createSprite(600, 380, 100, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  
  drawSprites();
 
}



