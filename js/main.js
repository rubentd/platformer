$(document).ready( function(){

	var game = new Game({worldId : "world"});
	var mainChar = new MainChar("pika");
	game.setMainChar(mainChar);
	game.start();

});
