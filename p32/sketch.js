const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bird, sling1;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(855,310,40,30);
    box2 = new Box(855,310,40,30);
    box3 = new Box(855,310,40,30);
    box4 = new Box(855,310,40,30);
    box5 = new Box(855,310,40,30);
    
    
    ball = new Ball(100,100);

    stand = new Ground(900,350,200,20);

   
    sling1 = new Slingshot(ball.body,{x:200,y:100});
}


function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    ground.display();
    ball.display();
    sling1.display();
    stand.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    
   
}

//override function mouseDragged
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    sling1.fly();
}