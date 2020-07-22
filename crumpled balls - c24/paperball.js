class Ball {

    constructor (x,y){

        var options = {
            isStatic = false,
            restitution = 0.3,
            friction = 0.5,
            densitity = 1.2
        }

        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;

        World.add(world, this.body);
    }

    display() {

        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,5,5);


    }
}
