const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    ground = new Ground(500,640,400,20);
    ground1 = new Ground(900,400,300,20);
    ground2 = new Ground(600,height,1200,20);
    brick1 = new Block(330,235,30,40)
	//bin1 = new dustbin(700,670,200,20);
	//bin2 = new dustbin(610,590,20,150);
	//bin3 = new dustbin(790,590,20,150);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ground1.display();
  ground2.display();
  brick1.display();
	//bin1.display();		
	//bin2.display();
	//bin3.display();
//	bin.display(850, 605, 150, 150);
	

	
}

