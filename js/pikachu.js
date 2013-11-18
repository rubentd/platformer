function Pikachu(init){
	Character.call(this, init);
	this.sprite = "img/pikachu-sprite.png";
	this.width = 45;
	this.height = 50;
}

Pikachu.prototype = new Character();
Pikachu.prototype.constructor = Character;

