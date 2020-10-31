const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1=new ground(200,390,400,40);


    box1=new box(120,50,50,50);
    box2=new box(100,150,30,100);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
    box1.display();
    box2.display();
}