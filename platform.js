class platform{
    
    constructor(){
        var options={
        isStatic:true
      }
        this.body=Bodies.rectangle(width/2,100,1200,20,options)
        World.add(world,this.body)
        }
    display(){
        rectMode(CENTER)
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,1200,20)
    }
    
    }