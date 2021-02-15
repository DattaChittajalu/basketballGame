const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Runner=Matter.Runner;
const Composites = Matter.Composites;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var score =0

var gameState=0
var options
function preload(){
	
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
	//engine = Engine.create();


  engine = Engine.create();
/*
  var render = Render.create({
    element: document.body,
    engine: engine
  });
*/

	world = engine.world;
  

  groundObject=new ground(width/2,windowHeight-10,width,20);

  stone1=new Stone(windowWidth/6,windowHeight/2,30)

  slingshot=new SlingShot(stone1.body, {x:windowWidth/6,y:windowHeight/2})

  basket11 = new ground(width/2-200, windowHeight/2-95, 20,100)
  basket12 = new ground(width/2+100, windowHeight/2-95, 20,100)
  basket13 = new ground(width/2-50, windowHeight/2-50, 320,20)

  basket21 = new ground(width/2+450, windowHeight/2+295, 20,100)
  basket22 = new ground(width/2+750, windowHeight/2+295, 20,100)
  basket23 = new ground(width/2+600, windowHeight/2+350, 320,20)




  basket31 = new ground(width/2+300, windowHeight/2-220, 20,100)
  basket32 = new ground(width/2+600, windowHeight/2-220, 20,100)
  basket33 = new ground(width/2+450, windowHeight/2-170, 320,20)

  Engine.run(engine);
  //Render.run(render);
}

function draw() {

  background(230);

//  Engine.run(engine)

  if(gameState===0){
    textSize(50);
    fill("blue")
    stroke("white")
    strokeWeight(10)
    text("Welcome to the game", windowWidth/2-250,windowHeight/2-200);

    textSize(25)
    fill("black")
    text("Rule 1: Use the mouse to shoot the basketball into the hoop", windowWidth/2-320,windowHeight/2-100)
    text("Rule 2: Use the space key to return the ball", windowWidth/2-230,windowHeight/2)
    textSize(25)
    fill("black")
    text("Scoring: Each basket made is 2 points", windowWidth/2-200,windowHeight/2+100)
    text("To start the game, press the up arrow key", windowWidth/2-210, windowHeight/2+200)

     if(keyDown(UP_ARROW)){
        gameState=1
    }
  }

  //myCar=Composites.car(390, 0, 100, 30, 40);

  if(gameState===1){
    textSize(50);
    fill("blue")
    stroke("white")
    strokeWeight(10)
    text("Score: "+score,windowWidth/2-800,windowHeight/2-400)

    stone1.display()
    slingshot.display()
    
    groundObject.display();
     
    strokeWeight(4)
    stroke("black")
    basket11.display();
    basket12.display()
    basket13.display()

    stroke("red")
    basket21.display();
    basket22.display()
    basket23.display()

    stroke("green")
    basket31.display();
    basket32.display()
    basket33.display()
    collision(stone1, basket13);
    collision(stone1, basket23);
    collision(stone1, basket33);
    
  }

  
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
	slingshot.fly(stone1.body)
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body, {x:230, y:410})
		slingshot.attach(stone1.body)
	}
}

function collision(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    score=score+1;

    console.log("testing")
  }
}

// in function setup
/*/-----------------------------------------------

  //var groupId = Body.nextGroupId(),
  particleOptions = { friction: 0.00001,  render: { fillStyle: '#1919FF'}},
  cloth = Composites.softBody(850, 100, 5, 5, 8, 5, false, 8, particleOptions);

  for (var i = 0; i < 5; i++) {
    if (i === 0 || i  === 4)  {
      cloth.bodies[i].isStatic = true;
    }
  }

  World.add(world, cloth);

//---------------------------------------------*/
