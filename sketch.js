
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ball,blower,blowermouth,button;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ball=new Ball(450,110,60,60)
  blower=new Blower(420,150,80,20)
  blowermouth=new BlowerMouth(445,130,70,70)
  button=createButton('Click to blow')
  button.position(390,180)
  button.class('blowButton')
  button.mousePressed(force)

}

function draw() {
  background("black");  
  Engine.update(engine);

  ball.show();
  blower.show();
  blowermouth.show();
}

function force(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}