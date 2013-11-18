function Game(init){
	this.worldId = init.worldId;
	this.objects = [];
	this.loopFreq = 100;

	this.start = function(){
		//create event listeners for input
		this.listeners();
		//start game loop
		var game = this;
		setInterval( function(){ game.loop(); }, this.loopFreq);
	}

	this.loop = function(){
		//characters live
		$(this.objects).each( function(){
			this.live();
		});
	}

	this.addObject = function(obj){
		this.objects.push(obj);
		$("#" + this.worldId).append("<div id = '" + obj.id + "'></div>");
	}

	this.setMainChar = function(char){
		this.mainChar = char;
		this.addObject(this.mainChar);
	}

	this.listeners = function(){
		var game = this;
		$(document).ready( function(){
			game.listenToKeys();
		});
	}

	this.listenToKeys = function(){
		var game = this;
		$(document).keydown( function(e){
			if (e.keyCode == 37) { 
				game.mainChar.walk(-1);
			}else if (e.keyCode == 39) { 
				game.mainChar.walk(1);
			}
		});
		$(document).keyup( function(e){
			if (e.keyCode == 37 || e.keyCode == 39){ 
				game.mainChar.walk(0);
			}
		});
	}

}

function Character(){
	this.xPos = 0;
	this.yPos = 0;
	this.xMovement = 0;
	this.yMovement = 0;
}

Character.prototype.moveLeft = function(){
	this.xPos -= this.speed;
	$("#" + this.id ).css("left", this.xPos + "px");
	$("#" + this.id).removeAttr('class');
	$("#" + this.id ).addClass("walkLeft");
}

Character.prototype.moveRight = function(){
	this.xPos += this.speed;
	$("#" + this.id ).css("left", this.xPos + "px");
	$("#" + this.id).removeAttr('class');
	$("#" + this.id ).addClass("walkRight");
	this.showPos();
}

Character.prototype.showPos = function(){
	console.log(this.id + " current pos: " + this.xPos);
}

Character.prototype.live = function(){
	this.move();
}

Character.prototype.walk = function(x){
	this.xMovement = x;
}

Character.prototype.stand = function(){
	$("#" + this.id).removeAttr('class');
}

Character.prototype.move =  function(){
	//x movement
	if(this.xMovement > 0){
		this.moveRight();
	}else if(this.xMovement < 0){
		this.moveLeft();
	}else{
		this.stand();
	}
}

function MainChar(id, sprite){
	this.id = id;
	this.sprite = sprite;
	this.width = 45;
	this.height = 50;
	this.speed = 10;
}
MainChar.prototype = new Character();
