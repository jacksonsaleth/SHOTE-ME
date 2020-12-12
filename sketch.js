const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var sling,bob;
var b,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13;
function preload() {

}

function setup(){
    var canvas=createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   ground=new Ground(600,350,width,20);
   ground1=new Ground(500,220,300,10);
   ground2=new Ground(1000,300,300,10);
   box1=new Box(460,190,50,50);
   box2=new Box(520,190,50,50);
   box3=new Box(580,190,50,50);
   box4=new Box(400,190,50,50);
   box5=new Box(430,140,50,50);
   box6=new Box(490,140,50,50);
   box7=new Box(550,140,50,50);
   box8=new Box(460,90,50,50);
   box9=new Box(520,90,50,50);
   box10=new Box(490,40,50,50);
   bob=new shot(100,200,40,40);
   sling=new Sling(bob.body,{x:150,y:100})

   b=new Box(1000,290,50,50);
   b2=new Box(940,290,50,50);
   b3=new Box(880,290,50,50);
   b4=new Box(1060,290,50,50);
   b5=new Box(1120,290,50,50);
   b6=new Box(970,220,50,50);
   b7=new Box(910,220,50,50);
   b8=new Box(1030,220,50,50);
   b9=new Box(1090,220,50,50);
   b10=new Box(940,150,50,50);
   b11=new Box(1000,150,50,50);
   b12=new Box(1060,150,50,50);
   b13=new Box(960,110,50,50);
   b14=new Box(1030,110,50,50);
   b15=new Box(990,60,50,50);



}

function draw(){
    background(0,255,0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground1.display();
    ground2.display();
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
    bob.display();
    b.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    sling.display();
    
}

function mouseDragged(){
Matter.Body.setPosition(bob.body,{x: mouseX , y: mouseY})
}

function mouseReleased(){
sling.fly();

}
function keyPressed(){
if(keyCode===32){
sling.attach(bob.body);

}
}