
function Tile(link, color, text) {
	this.link = link;
	this.color = color;
	this.text = text;
}

var DEF_TILES = [
	new Tile('https://www.facebook.com', 'blue', 'Facebook'),
	new Tile('https://www.reddit.com', 'Red', 'Reddit'),
	new Tile('https://www.facebook.com', 'yellow', 'Facebook'),
	new Tile('https://www.facebook.com', 'purple', 'Facebook'),
	new Tile('https://www.facebook.com', 'white', 'Facebook'),
	new Tile('https://www.facebook.com', 'black', 'Facebook'),
	new Tile('https://www.facebook.com', 'orange', 'Facebook'),
	new Tile('https://www.facebook.com', 'grey', 'Facebook'),
	new Tile('https://www.facebook.com', '#FFAA33', 'Facebook'),
	new Tile('https://www.facebook.com', 'green', 'Facebook')];


chrome.runtime.sendMessage({store: {set: {key:"value3"}}}, function() {

	chrome.runtime.sendMessage({store: {get: "key"}}, function(result) {
	});
	
});




window.onload = function() {
	var htmlTiles = document.getElementsByClassName('user_tile');

	chrome.runtime.sendMessage({store: { get: "tiles"}}, function(storage_tiles) {
		
		var currLink;

		for(var i = 0; i < htmlTiles.length; i++) {

			if(storage_tiles[i]) {
				alert('ayyyy' + JSON.stringify(storage_tiles));
			}
			else {
				currLink = DEF_TILES[i].link;
				console.log(currLink);
				htmlTiles[i].innerText = DEF_TILES[i].text;
				htmlTiles[i].style.backgroundColor = DEF_TILES[i].color;
				htmlTiles[i].onclick = (function(link) { return function(){ location.href = link;}})(currLink);
			}
		}
		
	});
}
