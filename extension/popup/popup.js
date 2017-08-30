(function(chrome) {

window.onload = function() {
console.log(document);
console.log(document.getElementById('settings'));
document.getElementById('settings').addEventListener('click', function() {

	chrome.runtime.sendMessage({newTab:'../settings/settings.html'}, function(resp) {
		console.log(resp);
	});
	alert('aw');
});

};
}(chrome));
