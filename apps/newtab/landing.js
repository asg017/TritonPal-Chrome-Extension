const BG_PICS = [
	'pic1.jpg',
	'pic2.jpg',
	'pic3.jpg',
	'pic4.jpg',
	'pic5.jpg'];


function Tile(link, color, text) {
	this.link = link;
	this.color = color;
	this.text = text;
}

var DEF_TILES = [
	new Tile('https://www.facebook.com', '#A0AEC1', 'Facebook'),
	new Tile('https://www.twitter.com', '#A0AEC1', 'Twitter'),
	new Tile('https://www.reddit.com', '#A0AEC1', 'Reddit'),
	new Tile('https://play.spotify.com/', '#A0AEC1', 'Spotify'),
	new Tile('https://www.amazon.com', '#A0AEC1', 'Amazon'),

	new Tile('http://mytritonlink.ucsd.edu', '#FFB739', 'TritonLink'),
	new Tile('https://tritoned.ucsd.edu', '#FFB739', 'TritonEd'),
	new Tile('https://services.jsatech.com/login.php?cid=212&', '#FFB739', 'Triton Card Account'),
	new Tile('https://act.ucsd.edu/webreg2/start', '#FFB739', 'WebReg'),
	new Tile('http://libraries.ucsd.edu/hours/', '#FFB739', 'Library Hours'),

	];


/*chrome.runtime.sendMessage({store: {set: {key:"value3"}}}, function() {

	chrome.runtime.sendMessage({store: {get: "key"}}, function(result) {
	});
	
});*/




function loopChange(i) {
		document.getElementById('main').style.backgroundImage = 'url(' + BG_PICS[i % BG_PICS.length] + ')';
		setTimeout(function() {loopChange(i+1)},5000);
}

window.onload = function() {
	loopChange(0);
	var htmlTiles = document.getElementsByClassName('user_tile');

	chrome.runtime.sendMessage({store: { get: "tiles"}}, function(storage_tiles) {
		
		var currLink;
		var child;

		for(var i = 0; i < htmlTiles.length; i++) {
			
			child = htmlTiles[i].children[0];

			if(storage_tiles[i]) {
				alert('ayyyy' + JSON.stringify(storage_tiles));
			}
			else {
				currLink = DEF_TILES[i].link;
				console.log(currLink);
				child.innerText = DEF_TILES[i].text;
				htmlTiles[i].style.backgroundColor = DEF_TILES[i].color;
				htmlTiles[i].onclick = (function(link) { return function(){ location.href = link;}})(currLink);
			}
		}
		
	});

	chrome.runtime.sendMessage({store: {get: "calendarHtml"}}, function(calendarHtml) {
		var sched_inside = document.getElementById('class_schedule');
		sched_inside.innerHTML = calendarHtml.calendarHtml;

			var schedIsOpen = false;

			document.getElementById('schedule_app').onclick =	(function() { return function(){ 

				var hideDivs = document.getElementsByClassName('hide_schedule');

				if(schedIsOpen) {
					document.getElementById('schedule_app').style.height = '90px';
					document.getElementById('schedule_app').style.zIndex = '0';

					for(var i = 0; i < hideDivs.length; i++) {
						hideDivs[i].style.opacity = '.9';
					}
					schedIsOpen = false;
				}
				else {
					sched_inside.style.display = 'inline';
					sched_inside.style.height = '700px';
					document.getElementById('schedule_app').style.height = '600px';
					document.getElementById('schedule_app').style.zIndex = '100';

					for(var i = 0; i < hideDivs.length; i++) {
							hideDivs[i].style.opacity = '.1';
					}
					schedIsOpen = true;
				}
				}})();
	});

	document.getElementById('settings').onclick = function() {
		location.href = 'settings.html';
	};
}

var htmlTiles = document.getElementsByClassName('user_tile');


