

window.onload = function() {

	var calendar = document.getElementById('class_schedule');
	console.log(calendar);


	if(calendar) {
		var s = calendar.innerHTML;
		console.log(s);
		chrome.runtime.sendMessage({store: {set: {"calendarHtml" : s}}}, function() {
			console.log('yay');
		});

	}
};

