function Game(init){
	this.worldId = init.worldId;
	this.objects = [];

	this.start = function(){
		//create event listeners for input
		this.listeners();
		//start game loop
		setInterval(this.loop, 1000);
	}

	this.loop = function(){
		//
	}

	this.placeObject = function(obj){
		$("#" + this.worldId).append("<div id = '" + obj.id + "'></div>");
		$("#" + obj.id).css("width", obj.width + "px");
		$("#" + obj.id).css("height", obj.height + "px");
		$("#" + obj.id).css("background-image", "url(" + obj.sprite + ")");
	}

	this.setMainChar = function(char){
		this.mainChar = char;
		this.objects.push(this.mainChar);
		this.placeObject(this.mainChar);
	}

	this.listeners = function(){
		$(document).ready( function(){
			listenToKeys();
		});
	}

	this.listenToKeys = function(){
		$(document).keydown( function(e){
			if (e.keyCode == 37) { 
				this.leftAction();
			}else if (e.keyCode == 38) { 
				this.upAction();
			}else if (e.keyCode == 39) { 
				this.rightAction();
			}else if (e.keyCode == 40) { 
				this.downAction();
			}
		})
	}

	this.leftAction = function(){
		this.mainChar.moveLeft();
	}

	this.upAction = function(){
		this.mainChar.jump();
	}

	this.rightAction = function(){
		this.moveRight();
	}

	this.downAction = function(){
		this.mainChar.dodge();
	}

}

function Character(init){
	this.id = init.id;
	this.xPos = init.xPos;
	this.yPos = init.xPos;

	this.moveLeft(){

	}

	
}

