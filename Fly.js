class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.0009,
            length:55
        }
        this.fly=Constraint.create(options)
        World.add(world,this.fly)
          
    }

        display(){
        if(this.fly.bodyA){
            var pointA=this.fly.bodyA.position
            var pointB=this.fly.pointB
            
             noStroke();
            line(pointA.x,pointA.y,pointB.x,pointB.y);


               
        }
      
    }
}


          
   