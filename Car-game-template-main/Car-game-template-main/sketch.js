var database;
var form,game,player;
var state,count;
var playerIndex;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game= new Game();
  player=new Player();
  form=new Form();

  game.start();


 

}

function draw(){
  background("white");
  
  
  
    
 
  
   
  
}

