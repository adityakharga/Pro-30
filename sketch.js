const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gameState = "onSling";
var score = 0;
function preload()
{

}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    
    //HEXAGON
    hex = new Hexagon(100,400,30,30)

    //FRAMES
    /*Frame1 = new Ground(400,700,800,20)
    Frame2 = new Ground(800,350,20,800)
    Frame3 = new Ground(400,0,800,20)
    Frame4 = new Ground(0,350,20,800)*/

    //BASES
    G1 = new Ground(1000,300,350,10)
    G2 = new Ground(600,500,350,10)

    //DOWN RIGHT
    Box1 = new Box(910,280,30,30)
    Box2 = new Box(950,280,30,30)
    Box3 = new Box(990,280,30,30)
    Box4 = new Box(1030,280,30,30)
    Box5 = new Box(1070,280,30,30)
    Box6 = new Box(1110,280,30,30)

    //DOWN LEFT

    Box7 = new Box(450,480,30,30)
    Box8 = new Box(500,480,30,30)
    Box9 = new Box(550,480,30,30)
    Box0 = new Box(600,480,30,30)
    Box01 = new Box(650,480,30,30)
    Box02 = new Box(700,480,30,30)

    //MIDDLE RIGHT
    Box03 = new Box(920,250,30,30)
    Box04 = new Box(1000,250,30,30)
    Box05 = new Box(1080,250,30,30)

    //MIDDLE LEFT
    Box06 = new Box(475,450,30,30)
    Box07 = new Box(575,450,30,30)
    Box08 = new Box(675,450,30,30)

    //TOP RIGHT
    Box09 = new Box(575,400,30,30)

    //TOP LEFT
    Box00 = new Box(1000,200,30,30)

	sling = new SlingShot(hex.body,{x:100,y:400})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  /*Frame1.display();
  Frame2.display();
  Frame3.display();
  Frame4.display();*/
  G1.display();
  G2.display();
  hex.display();
  sling.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box0.display();
  Box01.display();
  Box02.display();
  Box03.display();
  Box04.display();
  Box05.display();
  Box06.display();
  Box07.display();
  Box08.display();
  Box09.display();
  Box00.display();
  drawSprites();
  text("x:"+mouseX+" y:"+mouseY,mouseX,mouseY)
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode===32 ){
       hex.trajectory =[];
       Matter.Body.setPosition(hex.body, {x: 100 , y: 100});
       sling = new SlingShot(hex.body,{x:100,y:400})
       gameState = "onSling";
    }
}
