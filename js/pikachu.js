$(document).ready( function(){
	var mainChar = new Pikachu();
	mainChar.init(
		{
			charId : "pika",
			worldId : "#world",
			width: "50px",
			height: "50px"
		});
})


function Pikachu(){
	Character.call(this);
	this.sprite = "img/pikachu-sprite.png";
}

Pikachu.prototype = new Character();
Pikachu.prototype.constructor = Character;