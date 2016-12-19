(function(chrome) {
	var divID;



/*chrome.runtime.sendMessage({test:"hello"}, function(response) {
	console.log('in highlight response:');
	console.log(response);
	return true;
});*/


document.onmouseup = function(e) {
	
	var pointerElem = e.srcElement;

	while(pointerElem) {
		if(pointerElem.id == divID) {
			return;
		}
		pointerElem = pointerElem.parentElement;
	}

	if(divID) {
		document.body.removeChild(document.getElementById(divID));
		divID = undefined;
		return;
	}
	
	var selection = document.getSelection().toString();

	if(selection.length > 3 && selection.length < 10) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if(request.readyState == 4 && request.status == 200) {
				
				var newDiv = document.createElement('div');
				newDiv.innerHTML = request.responseText;
				newDiv.id = "TP_TEST_ID";
				divID = newDiv.id;
							
				var windowTopLocation = e.pageY - e.clientY;
				var windowBotLocation = windowTopLocation + document.documentElement.clientHeight;
				

				var leftLocation = (e.pageX + 320 > document.body.clientWidth)
					? document.body.clientWidth - 300
					: e.pageX + 20;
				var topLocation = (e.pageY + 350/2 > windowBotLocation)
					? windowBotLocation - 350
					: (e.pageY - 350/2 < windowTopLocation)
						? windowTopLocation
						: e.pageY - 350/2;

				newDiv.style.all = 'initial';

				newDiv.style.top = topLocation+'px';
				newDiv.style.left = leftLocation+'px';
				newDiv.style.position= "absolute";
				newDiv.style.display =  'inline';

				document.body.appendChild(newDiv);
			}
		};

		request.open('GET', 'https://tritonpal.herokuapp.com/apps/courses?class_code='+selection, true);
		request.send(null);

	}
}
}(chrome));
