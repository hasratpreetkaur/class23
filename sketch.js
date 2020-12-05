var eng,wor,box1,ground,box2,box3;
function setup() {
 var canvas= createCanvas(800,400);
  
  
  eng=Matter.Engine.create();
  wor=eng.world;
 

   
 var option={
   isStatic:true
 }
  ground=Matter.Bodies.rectangle(200,300,200,20,option);
  Matter.World.add(wor,ground);
 box1=new  box();
 box2=new box();
 box3=new box();
}

function draw() {
  background(255,255,255);
  Matter.Engine.update(eng)
   rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
box1.display();
box2.display();
bow3.display();
}