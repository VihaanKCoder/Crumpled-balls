
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papeer


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,650,40)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230); 

  groundObject.display();
  dustbinObj.display();
  paper.display()

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:330,y:-445})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-245})
	} 
}

