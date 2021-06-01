function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  // createSprite(x,y,width,height) is the command
  player=createSprite(50,535,40,40);
  target=createSprite(535,50,40,40);
  obs1=createSprite(300,120,100,20);
  obs1.velocityX=5;
  obs2=createSprite(300,320,100,20);
  obs2.velocityX=-5;

  edges=createEdgeSprites();
  



}

function draw() {
  background("black");  
  player.bounceOff(edges[0]);  //top
  player.bounceOff(edges[1]);  //right
  player.bounceOff(edges[2]);  //bottom 
  player.bounceOff(edges[3]);  //left

  obs1.bounceOff(edges[0]);  //top
  obs1.bounceOff(edges[1]);  //right
  obs1.bounceOff(edges[2]);  //bottom 
  obs1.bounceOff(edges[3]);  //left

  obs2.bounceOff(edges[0]);  //top
  obs2.bounceOff(edges[1]);  //right
  obs2.bounceOff(edges[2]);  //bottom 
  obs2.bounceOff(edges[3]);  //left

  if(keyDown("up"))
  {
    player.y=player.y-4;
  }
  if(keyDown("down"))
  {
    player.y=player.y+4;
  }
  if(keyDown("left"))
  {
    player.x=player.x-4;
  }
  if(keyDown("right"))
  {
    player.x=player.x+4;
  }

  if(player.isTouching(target))
  {
    text("You Win",300,300);
  }

  if(player.isTouching(obs1))
  {
    obs1.velocityX=0;
    
    text("You Lose",300,300);
  }

  if(player.isTouching(obs2))
  {
    obs2.velocityX=0;
    text("You Lose",300,300);
  }

  obs1.shapeColor="red";
  obs2.shapeColor="red";
  target.shapeColor="blue";
  player.shapeColor="green";
  drawSprites();
}
