function Streamer (name, link)
{
	this.name = name;
	this.link = link;
	this.score = 0;

}

Streamer.prototype.getName = function(){
	return this.name;
}

Streamer.prototype.getUrl = function(){
	return this.url;
}

Streamer.prototype.getScore = function(){
	return this.score;
}

Streamer.prototype.scoreInc = function(){
	this.score = this.score + 1;
}

Streamer.prototype.scoreReset = function(){
	this.score = 0;
}