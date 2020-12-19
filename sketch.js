var bob1,ground1,rope1,bob2,bob3,bob4,bob5,rope2,rope3,rope4,rope5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

  bob1=new ball(100,340,50)
  bob2=new ball(100,340,50)
  bob3=new ball(100,340,50)
  bob4=new ball(100,340,50)
  bob5=new ball(100,340,50)
	ground1=new platform()
  rope1=new SlingShot(bob1.body,{x:50,y:100})
  rope2=new SlingShot(bob2.body,{x:100,y:100})
  rope3=new SlingShot(bob3.body,{x:150,y:100})
  rope4=new SlingShot(bob4.body,{x:200,y:100})
  rope5=new SlingShot(bob5.body,{x:250,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    //}
}

