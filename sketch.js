const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;

var box1;
var ground
var box3
var box2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    myworld = engine.world;

   

    


    box1 = new Box(200,200,30,30)

ground = new Ground(200,390,400,20)

    box2 = new Box(150,200,250,50)

box3 = new Box(100,200,40,40)

}

function draw(){
    background(0);
    Engine.update(engine);
  

 box1.display();
 box2.display();
 box3.display();

ground.display();


}