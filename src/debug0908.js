let stage=new Stage("canvas");

draw(stage);
let fps=config.FPS;
console.log(fps);
let frame=0;
let clock=30;
let flag=true;

let leftFlag=false;
let rightFlag=false;
let downFlag=false;
let rotateFlag=false;
let reverseRotateFlag=false;
let listener=addEventListener("keydown",(e)=>{
	console.log(e.keyCode);
	switch(e.keyCode){
		case 16://shift
			stage.enterReverseRotateKey();
		break;
		case 65://←
			stage.enterLeftKey();
		break;
		case 87://↑
			stage.enterRotateKey();
		break;
		case 68://→
			stage.enterRightKey();
		break;
		case 83://↓
			stage.enterDownKey();
		break;
	}
	
});
let continuer=setTimeout(loop2,1000/clock);


function loop2(){
	if(stage.move1Frame()){

		let continuer=setTimeout(loop2,1000/clock);
	}else{
		clearTimeout(continuer);
	}

}
