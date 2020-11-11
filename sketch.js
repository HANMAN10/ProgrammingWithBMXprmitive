const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy;
var zombie, goldZombie;
var trophy;
var bullet;

var boyShootingIMG, boyDeadIMG;
var zombieIMG, goldZombieIMG;

function preload() {

  /*boyShootingIMG = loadImage("bobShoting.png");
  boyDeadIMG = loadImage("bobDead.png");

  zombieIMG = loadImage("zombieSnipped.png");
  goldZombieIMG = loadImage("goldZombie.png");*/
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;

  boy = new Boy(200, 200, 100, 100);
  zombie = new Zombie(300, 300, 50, 50);

  bullet = createSprite(boy.x, boy.y, 20, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  bullet.shapeColor = "yellow";

  if (bullet.isTouching(Zombie)) {
    Zombie.visibility = 0;
  }

  keyPressed();
  drawSprites();

}

function keyPressed() {

    if(keyCode === 77) {
        boy.y += 5;
    }

    if(keyCode === 61) {
      boy.x += -5;
    }

    if(keyCode === 73) {
      boy.y += -5;
    }

    if(keyCode === 64) {
      boy.x += -5;
    }

    if(keyCode === 32) {
      bullet.x += 10;
    }

  }
