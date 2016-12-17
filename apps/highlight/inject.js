(function(chrome) {
	var divID;



/*chrome.runtime.sendMessage({test:"hello"}, function(response) {
	console.log('in highlight response:');
	console.log(response);
	return true;
});*/

function Popup(contentObj) {
	
	var htmlMain = document.createElement('div');


	var htmlCourseInfo = document.createElement('div');
	var htmlCourseTitle = document.createElement('div');
	var htmlCourseDescrip = document.createElement('div');
	var htmlCoursePrereqs = document.createElement('div');

	htmlMain.id = 'highlight_main_div'; 
	htmlCourseInfo.id = 'highlight_course_info'; 
	htmlCourseTitle.id = 'highlight_course_title';
	htmlCourseDescrip.id = 'highlight_course_descrip';
	htmlCoursePrereqs.id = 'highlight_course_prereqs';
	console.log('\n\n\n\n\n\n');
	console.log('xxx' + document.documentElement.clientHeight);
	console.log('d.b.cw' + document.body.clientWidth);
	console.log('d.b.ch' + document.body.clientHeight);
	console.log('c.me.px' + contentObj.mouseEvent.pageX);
	console.log('c.me.py' + contentObj.mouseEvent.pageY);
	console.log('c.me.cx' + contentObj.mouseEvent.clientX);
	console.log('c.me.cy' + contentObj.mouseEvent.clientY);
	
	var windowTopLocation = contentObj.mouseEvent.pageY - contentObj.mouseEvent.clientY;
	var windowBotLocation = windowTopLocation + document.documentElement.clientHeight;

	console.log('wtl' + windowTopLocation);
	console.log('wbl' + windowBotLocation);


	var leftLocation = (contentObj.mouseEvent.pageX + 320 > document.body.clientWidth)
		? document.body.clientWidth - 300
		: contentObj.mouseEvent.pageX + 20;
	var topLocation = (contentObj.mouseEvent.pageY + 350/2 > windowBotLocation)
		? windowBotLocation - 350
		: (contentObj.mouseEvent.pageY - 350/2 < windowTopLocation)
			? windowTopLocation
			: contentObj.mouseEvent.pageY - 350/2;

	var styles = {

		main: {
			position: "absolute",
			display: 'inline',
			width: "300px",
			height: "350px",
			left: leftLocation+'px',
			top: topLocation+'px',

			backgroundColor:  '#C9A798',

			borderRadius: "5px",
			borderStyle:'solid',
			borderWidth: '1px',
			borderColor: '#4F2412',
		},

		courseInfo: {
			padding: '5px',
		},
		courseInfoDivs: {
		  borderStyle: 'solid', 
		  borderColor: '#4F2412', 
			backgroundColor: '#E9E0DB',
		  borderWidth: '1px',
		  padding:'5px',
			textAlign: 'left',
			lineHeight: '100%',
			overflowY: 'auto',
		},
		courseTitle: {
			borderRadius:'5px',
			backgroundColor:'red',
			fontSize: '20px',
		},
		courseDescrip: {
			marginTop: '5px',
			borderRadius: '5px',
			fontSize:'16px',
			height: '175px',
			width: '70%',
		},
		coursePrereqs: {
			borderRadius: '5px',
			marginTop: '5px',
			height: '65px',
		},
	};




	//Filling in HTMLcourseInfo
	for(var x in styles.courseInfo) {
		htmlCourseInfo.style[x] = styles.courseInfo[x];
	}

	//Filling in HTMLCourseTitle
	htmlCourseTitle.innerHTML =
		'<span id="course_code" style="font-size:24px; font-weight:bold">' + contentObj.text.class_code + 
		'</span> <span id="course_units"> (' + contentObj.text.num_units+ ' units)</span> <br>' +
		'<span id="course_name"> ' + contentObj.text.course_name+ '</span>';
	for(var x in styles.courseTitle) {
		htmlCourseTitle.style[x] = styles.courseTitle[x];
	}

	//Filling in HTMLCourseDescrip
	htmlCourseDescrip.innerHTML = 
		'<span style="font-weight:bold;font-size:20px;text-decoration:underline;">Description:</span> <br><br>' + contentObj.text.description;
	for(var x in styles.courseDescrip) {
		htmlCourseDescrip.style[x] = styles.courseDescrip[x];
	}


	//Filling in HTMLCoursePrereqs
	htmlCoursePrereqs.innerHTML = 
	  '<span style="font-weight:bold; font-size:20px;text-decoration:underline;">Pre-Reqs:</span><br>' + 
			((contentObj.text.prereqs) ? contentObj.text.prereqs : 'No Pre-Reqs found.');
	for(var x in styles.coursePrereqs) {
		htmlCoursePrereqs.style[x] = styles.coursePrereqs[x];
	}

	//fill in course info divs specific stlyes
	for(var x in styles.courseInfoDivs) {
		htmlCourseTitle.style[x] = styles.courseInfoDivs[x];
		htmlCourseDescrip.style[x] = styles.courseInfoDivs[x];
		htmlCoursePrereqs.style[x] = styles.courseInfoDivs[x];
	}

	htmlCourseInfo.appendChild(htmlCourseTitle);
	htmlCourseInfo.appendChild(htmlCourseDescrip);
	htmlCourseInfo.appendChild(htmlCoursePrereqs);

	//filling in HTML main
	for(var x in styles.main) {
		htmlMain.style[x] = styles.main[x];
	}

	
	htmlMain.appendChild(htmlCourseInfo);


	this.htmlMain = htmlMain;
}


document.onmouseup = function(e) {
	
	var pointerElem = e.srcElement;

	while(pointerElem) {
		if(pointerElem.id == divID) {
			return;
		}
		pointerElem = pointerElem.parentElement;
	}

	/*
	if(e.srcElement.id === divID || 
		e.srcElement.parentElement.id == divID ||
		e.srcElement.parentElement.parentElement.id == divID) {
		return;
	}*/

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

				var popup = new Popup({text: JSON.parse(request.responseText), mouseEvent: e});
				divID = popup.htmlMain.id;
				document.body.appendChild(popup.htmlMain);
			}
		};

		request.open('GET', 'https://calhacks3twitter.herokuapp.com/apps/courses?class_code='+selection, true);
		request.send(null);

	}
}
}(chrome));
