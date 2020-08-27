
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    holder1 = new Holder(400,100,600,20,)


    bob1 = new Bob(200,500,80,20);
    bob2 = new Bob(300,500,80,20);
    bob3 = new Bob(400,500,80,20);
    bob4 = new Bob(500,500,80,20);
    bob5 = new Bob(600,500,80,20);
    chain = new Chain(bob1.body,holder1.body);
    chain2 = new Chain(bob2.body,holder1.body);
    chain3 = new Chain(bob3.body,holder1.body);
    chain4 = new Chain(bob4.body,holder1.body);
    chain5 = new Chain(bob5.body,holder1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  holder1.display();
  bob1.display();
  chain.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



