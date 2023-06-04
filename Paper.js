class Paper{
    constructor(x,y,r,options){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
            texture:this.image
            } 
        this.x=x;
        this.y=y;
        this.radius=r;
        this.width=width
        this.height=height
        this.body= Matter.Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        }

    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, 100, 100)
        rect(0,0)
        pop()
    }
    
}
