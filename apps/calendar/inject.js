console.log('ayyy');


var topDiv = document.createElement('input');

topDiv.style.position = 'inline';
topDiv.type = 'button';
topDiv.value = 'Convert to gCal';
topDiv.style.marginLeft = '1px';
topDiv.onclick = function() {alert('ayy lmao');};

//topDiv.style.top = '200px';
//topDiv.style.left = '20px';
topDiv.style.height = '20px';
topDiv.style.width = '120px';
topDiv.style.backgroundColor = 'yellow';
topDiv.style.zIndex = 100;

document.getElementById('schedule-addevent-div').appendChild(topDiv);



//1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
/*
var body = document.getElementsByTagName("body")[0];
body.appendChild(button); */
document.getElementById('schedule-addevent-div').appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert(document.getElementById("viewbooklistlink").getAttribute("href"));
});
