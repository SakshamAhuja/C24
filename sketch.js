const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5 ;
var log1,log2,log3,log4 ;
var bird1 ;
var pig1,pig2 ;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(280,100,50,50);
    box4 = new Box(320,100,50,50);
    box5 = new Box(360,100,50,50); 
    
    log1 = new Log(520,80,50,PI/2);
    log2 = new Log(530,80,50,-PI/2);
    log3 = new Log(520,80,50,PI/7);
    log4 = new Log(520,80,50,-PI/7);

    bird1 = new Bird(100,250);
    pig1 = new Pig(520,250);
    pig2 = new Pig(560,250)

   
   
    ground = new Ground(200,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    bird1.display()
    pig1.display()
    pig2.display()
    ground.display();
}