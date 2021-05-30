class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 1
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){
        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
    this.sling.bodyA=null;
   }
   attach(bodyA){
    this.sling.bodyA = bodyA;
}
}