const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(410,298,30,40)
    box2 = new Box(440,298,30,40)   
    box3 = new Box(470,298,30,40)
    box4 = new Box(500,298,30,40)
    box5 = new Box(530,298,30,40)
    box6 = new Box(560,298,30,40)
    box7 = new Box(590,298,30,40)
    box8 = new Box(425,208,30,40)
    box9 = new Box(455,208,30,40)
    box10 = new Box(485,208,30,40)
    box11= new Box(515,208,30,40)
    box12 = new Box(545,208,30,40)
    box13 = new Box(575,208,30,40)
    box14 = new Box(440,158,30,40)
    box15 = new Box(470,158,30,40)
    box16 = new Box(500,158,30,40)
    box17 = new Box(530,158,30,40)
    box18 = new Box(560,158,30,40)
    box19 = new Box(455,130,30,40)
    box20 = new Box(485,130,30,40)
    box21= new Box(515,130,30,40)
    box22 = new Box(545,130,30,40)
    box23 = new Box(470,102,30,40)
    box24 = new Box(500,102,30,40)
    box25 = new Box(530,102,30,40)
    box26 = new Box(485,72,30,40)
    box27= new Box(515,72,30,40)
    box28 = new Box(500,32,30,40)
    
    ground = new Ground(600,height,1200,20)
    platform1 = new Ground(500,300,250,10)
    stone = new Stone(250,300);
    slingshot = new SlingShot(stone.body,{x:250, y:300});
}

function draw(){
    background("white");
    Engine.update(engine);

     box1.display();
     box2.display();
    
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box15.display();
     box14.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box26.display();
     box27.display();
     box28.display();
    slingshot.display();
    stone.display();
    ground.display();
    platform1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}