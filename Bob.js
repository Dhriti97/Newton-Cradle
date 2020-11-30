class Bob {
    constructor(x, y,r) {
      var options = {
          
          restitution:1,
          friction:2,
          density:4,
          isStatic:false
      }
      this.body = Bodies.circle(x,y,r, options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);  
      fill("purple");
      ellipse(0,0, this.r,35);
      pop();
    }
  }