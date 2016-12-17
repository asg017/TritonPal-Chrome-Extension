console.log('ayyy');










//MICHELLE DONT LOOK BELOW SPOILERS DOWN BELOW







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
