const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2, rotator1, rotator2, rotator3, angle1, angle2, angle3, particle1, particle2, particle3, particle4, particle5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 650);


	engine = Engine.create();
	world = engine.world;

	
  var plane_options = {
		isStatic: true
	};
	var block1_options = {
		isStatic: true
	};
	var block2_options = {
		isStatic: true
	};
	var rotator_options = {
		isStatic: true
	};
  var particle_options = {
    restitution: 0.4,
    friction: 0.02
  };

	
  //Crie os Corpos aqui.
	plane = Bodies.rectangle(250, 650, 500, 20, plane_options);
	World.add(world, plane);

	
	block1 = Bodies.rectangle(120, 450, 120, 20, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(350, 450, 120, 20, block2_options);
	World.add(world, block2);


	rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1);
	
	rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator2);
	
	rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator3);
	
	angle1 = 60;
	World.add(world, angle1);
	
	angle2 = 60;
	World.add(world, angle2);

	angle3 = 60;
	World.add(world, angle3);


  particle1 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle1);

  particle2 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle2);

  particle3 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle3);

  particle4 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle4);

  particle5 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle5);


	Engine.run(engine);
}


function draw() {
  background("blue");
  rectMode(CENTER);
  ellipseMode(CENTER);
  fill("red");
  
  Engine.update(engine);
  
  //desenha o solo
  rect(plane.position.x, plane.position.y, 500, 20);
  
  //desenha os blocos 
  rect(block1.position.x, block1.position.y, 120, 20);
  rect(block2.position.x, block2.position.y, 120, 20);

  //gira os rotatores
  Matter.Body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 3;

  Matter.Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 5.4;
  
  Matter.Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 7;
  
  //dá forma para as partículas
  ellipse(particle1.position.x, particle1.position.y, 30);
  ellipse(particle2.position.x, particle2.position.y, 30);
  ellipse(particle3.position.x, particle3.position.y, 30);
  ellipse(particle4.position.x, particle4.position.y, 30);
  ellipse(particle5.position.x, particle5.position.y, 30);


  drawSprites();
 
}



