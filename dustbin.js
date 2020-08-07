class Trash {

constructor(x,y) {
    var options={
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

    this.x = x
    this.y = y
    this.dustbinWidth = 200;
    this.dustbinHeight = 100;
    this.thickness = 20

    this.bottomBody = Bodies.rectangle(1000,625,this.dustbinWidth.w,this.thickness,options);
    World.add(world,this.bottomBody);
    
    this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.thickness,this.dustbinHeight,options);
    World.add(world,this.leftBody);

    this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.thickness,this.dustbinHeight,options);
    World.add(world,this.rightBody);
}

display(){

    var posB = this.bottomBody.position;
    var posL = this.leftBody.position;
    var posR = this.rightBody.position

    push();
    
    rectMode(CENTER);
    fill("red");
    rect(posB.x,posB.y,this.dustbinWidth,this.thickness);
    pop();
    
    push();
    translate(posL.x,posL.y);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.thickness,this.dustbinHeight);
    pop();

    push();
    translate(posR.x,posR.y);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.thickness,this.dustbinHeight);
    pop();

}

}