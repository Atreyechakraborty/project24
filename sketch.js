
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	box1= createSprite(400,650,200,20)
	box1.shapeColor=color("white")

	box2= createSprite(300,610,20,100)
	box2.shapeColor=color("white")

	box3= createSprite(490,610,20,100)
	box3.shapeColor=color("white")
	engine = Engine.create();

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}



