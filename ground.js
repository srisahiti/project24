class Ground{

    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.body = Bodies.rectangle(x,y,widht,height,options);
        World.add(world,this.body);
    }
    display(){
        var Pos = this.body.position;

        push();
        translate(Pos.x,Pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0);
        rect(0,0,this.w,this.h);
        pop();
    }

}