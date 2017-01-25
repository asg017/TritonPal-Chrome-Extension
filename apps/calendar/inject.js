
//1. Create the button
var gCalButton = document.createElement('button');
gCalButton.innerText = 'Export';

var gCalStyles = {
    width: '90px',
    height: '20px',
    'font-size': '12px',
    'font-weight': 'bold',
    'margin-left': '10px',
    border: 0,
    color: '#333',
    display: 'inline-block',
    outline: 0,
    cursor: 'pointer',
    'text-align': 'center',
    'text-decoration': 'none',
    'text-shadow': 'rgba(255,255,255,.5) 0 1px 1px',
    'margin-right': '.5em',
    'padding': '.25em 1em',
    '-moz-border-radius': '.25em',
    '-webkit-border-radius': '.25em',
    'border-radius': '.25em',
    '-moz-box-shadow': '0 1px 2px rgba(0,0,0,.5)',
    '-webkit-box-shadow': '0 1px 2px rgba(0,0,0,.5)',
    'boxshadow': '0 1px 2px rgba(0,0,0,.5)'
};

for(var x in gCalStyles) {
	gCalButton.style[x] = gCalStyles[x];
}

gCalButton.className = 'button secondary';

document.getElementById('schedule-addevent-div').appendChild(gCalButton);

// 3. Add event handler
gCalButton.addEventListener ("click", function() {
  //Save BookList as a variable
  var booklink = document.getElementById("viewbooklistlink").getAttribute("href");
  var length = "https://ucsdbkst.ucsd.edu/wrtx/FullBookList".length; //44


  //Get valuable information from booklink
  var infolink = booklink.substring(length);
  //Open in a new tab
  window.open('https://tritonpal.herokuapp.com/apps/calendar/landing.html' +
              infolink, '_blank');

});

/** CSS of their button fur future reference
    width: 90px;
    height: 20px !important;
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;


    .secondary:hover {
    background: #ccc;
}
.secondary {
    background: #eee;
    background: -moz-linear-gradient(top,#eee,#ddd);
    background: -webkit-gradient(linear,left top,left bottom,from(#eee),to(#ddd));
}
.button {
    border: 0;
    color: #333;
    display: inline-block;
    outline: 0;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-shadow: rgba(255,255,255,.5) 0 1px 1px;
    margin-right: .5em;
    padding: .25em 1em;
    -moz-border-radius: .25em;
    -webkit-border-radius: .25em;
    border-radius: .25em;
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.5);
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.5);
    box-shadow: 0 1px 2px rgba(0,0,0,.5);
}
 **/
