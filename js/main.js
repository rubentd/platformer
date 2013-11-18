$(document).ready( function(){

	var game = new Game({worldId : "world"});
	var mainChar = new Pikachu({id : "pika", xPos : 0, });
	game.setMainChar(mainChar);
	game.start();

});
