const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var background,backgroundImg;

function preload() {
backgroundImg=loadImage("background.png");

}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
    world = engine.world;
     ground=new Ground(160,580,1550,15);

  block1=new Block(410,540,40,40);
  block2=new Block(410,510,40,40);
  block3=new Block(410,460,40,40);
  block4=new Block(410,420,40,40);
  block5=new Block(410,380,40,40);
  block6=new Block(410,340,40,40);
  block7=new Block(410,300,40,40);

  block8=new Block(460,380,40,40);
  block9=new Block(460,340,40,40);
  block10=new Block(460,300,40,40);
  block11=new Block(460,260,40,40);
  block12=new Block(460,220,40,40);
  block13=new Block(460,180,40,40);

  block14=new Block(510,380,40,40);
  block15=new Block(510,340,40,40);
  block16=new Block(510,300,40,40);
  block17=new Block(510,260,40,40);
  block18=new Block(510,220,40,40);
  block19=new Block(510,180,40,40);
  block20=new Block(510,140,40,40);
  block21=new Block(510,100,40,40);

  block22=new Block(570,380,40,40);
  block23=new Block(570,340,40,40);
  block24=new Block(570,300,40,40);
  block25=new Block(570,260,40,40);
  block26=new Block(570,220,40,40);

      hero = new Hero(110,50,200);
  monster=new Monster(700,540,200);
   fly=new Fly(hero.body,{x:130,y:60})

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
 ground.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 fly.display();
 hero.display();
 monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}
