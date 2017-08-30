

function inputHandler() {
	alert('ayyyy');
	alert(this);
}


window.onload = function() {
var inputs = document.querySelectorAll('input[type=checkbox]');
console.log(inputs);


for(var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('change', function(e) {
		console.log(e);
	});
}

}




