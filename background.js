
var eTime = Date.now() + 5;

chrome.runtime.onMessage.addListener( function(req, sender, sendResponse) {

	if(req.newTab) {
		chrome.tabs.create({url:req.newTab});
		sendResponse(true);
		return;
	}

chrome.notifications.create("TEST_ID_FIRST",
		{ type:"basic",
			title:"This is a title", 
			message: "This is a message mother fucker",
			iconUrl: "https://developer.chrome.com/static/images/chrome-logo_2x.png",
			buttons: [{ title: 'Learn More' }],
			priority: 2,
			eventTime: eTime,
		},  

		function() {
			alert(eTime);
		});

	sendResponse({thisIs:"A Test!"});
	return true;
});

