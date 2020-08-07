
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall
var ground
var trash

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperBall = new Paper (200,600,20);
ground = new Ground (800,650,1600,30);
trashcan = new Trash (1000,625);	
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  trashcan.display();
  paperBall.display();

  space();

  drawSprites();
 
}

function space() {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body, {x:10, y:-15})

		//paperBall.body.y = paperBall.body.y +20;

		//if (keyCode === DOWN_ARROW){
		//	Matter.Body.applyForce(paperBall.body, paperBall.body, {x:-20, y:30})
		//}
	}
}

