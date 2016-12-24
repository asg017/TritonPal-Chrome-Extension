var eTime = Date.now() + 5;

function clock() {
	alert('ayyyyy');
	setTimeout(clock, 5000);
}
//clock();
chrome.runtime.onMessage.addListener( function(req, sender, sendResponse) {

	if(req.newTab) {
		chrome.tabs.create({url:req.newTab});
		sendResponse(true);
		return;
	}
	else if(req.store) {

		var storeObj = req.store;

		if(storeObj.set) {
			chrome.storage.local.set(storeObj.set, function() {
				sendResponse(true);
			});
		}
		else if(storeObj.get) {
			chrome.storage.local.get(storeObj.get, function(result) {
				sendResponse(result);
			});
		}
		return true;
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

