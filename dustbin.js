class Dustbin {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle=0;
        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        World.add(world, this.bottombody);

        this.leftbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        Matter.Body.setAngle(this.leftbody,this.angle)
        World.add(world,this.leftbody);

        this.rightbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        Matter.Body.setAngle(this.rightbody,-1*this.angle)
        World.add(world,this.rightbody);
    }
    display(){
        var bottompos=this.bottombody.position;
        var leftpos=this.leftbody.position;
        var rightpos=this.rightbody.position;

        push() 
        translate(leftpos.x, leftpos.y); 
        rectMode(CENTER)
         //strokeWeight(4);
         angleMode(RADIANS)
          fill(255)
           stroke(255)
        rotate(this.angle)
         rect(0,0,this.wallThickness, this.dustbinHeight);
          pop()

          push() 
        translate(rightpos.x, rightpos.y); 
        rectMode(CENTER)
         //strokeWeight(4);
         angleMode(RADIANS)
          fill(255)
           stroke(255)
         rotate(-1*this.angle)
         rect(0,0,this.wallThickness, this.dustbinHeight);
          pop()

          push() 
          translate(bottompos.x, bottompos.y); 
          rectMode(CENTER)
           //strokeWeight(4);
            angleMode(RADIANS)
            fill(255)
            stroke(255)
           rect(0,0,this.wallThickness, this.dustbinHeight);
            pop()

    }
}