function Character(){

}

Character.prototype.init = function(initData){
	$(worldId).append("<div id = '" + charId + "'></div>");
	$(charId).css("width", width);
	$(charId).css("height", height);
}