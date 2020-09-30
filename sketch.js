
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	dustbin=new Dustbin(800,100,25,25);
	ground=new Ground(800,125,25,25);
	paper=new Paper(200,100,25,25);
     

	engine = Engine.create();
	world = engine.world;

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  ground.display();
  paper.display();
  

  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



