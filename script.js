// Snake game script
const root = document.getElementById("root");
const up=document.getElementById("up");
const down=document.getElementById("down")
const palypouse=document.getElementById("playpouse")
const left=document.getElementById("left")
const right=document.getElementById("right")
var ctx = root.getContext("2d");
class snakeNode{
    constructor(){

    }
    addNode(){

    }
    removeNode(){

    }
    
}
class Snake{
    snakeBody=[{1:''}]
    targetposition=[110,100];
    direction='+X';
    left=100;
    top=100;
    point=0;
    speed=0;
    displaySnake(){
        ctx.strokeStyle="#f0f"
        ctx.beginPath();
        ctx.arc(this.left,this.top,5,0,2*Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(this.targetposition[0],this.targetposition[1],10,0,2*Math.PI);
        ctx.stroke();
    }
    moveSnake(){

        switch(this.direction){
            case '+X':
                this.left +=this.speed;
                break;
            case '-X':
                this.left -=this.speed;
                break;
            case '-Y':
                this.top +=this.speed;
                break;
            case '+Y':
                this.top -=this.speed;
                break;
        }
    }
    displayTarget(){

        this.targetposition = [Math.round(Math.random()*300),Math.round(Math.random()*300)]
        
    }
    attackTartget(){

    }
    setDirection(param){
        this.direction = param;
    }
    gameOver(){
        this.speed=0
    }
    palypouse(){
        if(this.speed===0){
            this.speed = 2;
        }else this.speed = 0;

    }
}

const snake=new Snake()
snake.displayTarget();
setInterval(()=>{
    if(snake.top<0 || snake.top>300 || snake.left<0||snake.left>300){
        alert('Game over score 20!')
        clearInterval();
    }else{
        snake.moveSnake();
        ctx.clearRect(0,0,1000,1000);
        snake.displaySnake()
    }
},50)

up.addEventListener('click',()=>snake.setDirection('+Y'))
down.addEventListener('click',()=>snake.setDirection('-Y'))
left.addEventListener('click',()=>snake.setDirection('-X'))
right.addEventListener('click',()=>snake.setDirection('+X'))
palypouse.addEventListener('click',()=>snake.palypouse())