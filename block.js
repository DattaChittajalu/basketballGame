class Basket{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=200
		this.h=200
		this.image=loadImage("basket.png")
		this.body=Bodies.rectangle(x, y,1,1, options);
		
		 World.add(world, this.body);
		 this.visibilty=255 

	}
	score(){
		if(this.visibilty<0 && this.visibilty>-105){
			score=score+1
			console.log(score)
		}
	}
	display()
	{
			
			var Pos=this.body.position;	
			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);			
				
			pop()

	
	}

}