class  box{
constructor()
{
    var opt2={
        restitution:1.0}
    this.body=Matter.Bodies.rectangle(200,100,20,50,opt2)
    Matter.World.add(wor,this.body);

}
display(){
var pos=this.body.position;

rectMode(CENTER)
rect(pos.x,pos.y, 20,20);

}
}    