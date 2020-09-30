class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        
        this.body=Bodies.circle(this.x,this.y,options);
        World.add(world,this.body);
    }
    display(){

        var posi = this.body.position;

        push();
        translate(posi.x,posi.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        pop();
    }
}