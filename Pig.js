class Pig{
    //we don't need to change the size of our pig objects, so we can give them a fixed size
    constructor(x,y){
        var options={
        restitution: 0.8,
        friction: 1.0,
        density: 1.0
                    }
 this.body= Bodies.rectangle(x,y,50,50,options);
 this.width=50;
 this.height= 50;
 World.add(world,this.body);
}

display(){

var pos= this.body.position;
var angle= this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);

fill("red");
rect(0,0,this.width, this.height);
pop();
}
}