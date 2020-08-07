class Paper {

    constructor (x,y,r) {

        var options= {
            'isStatic': false,
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.5

        }

        this.r = r
        this.x = x
        this.y = y
        this.body = Bodies.circle(this.x,this.y,this.r,options);

        World.add (world,this.body);


    }


    display(){

        var pos = this.body.position

        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(255,255,255);
        ellipse(0,0,this.r,this.r);
        pop()
        

    }




}