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

  //Change a div to a different color upon clicking on the button
  //NOTE: This occurs after the alert seemingly no matter what
  var htmlbg = document.getElementById("mainpage-top-div");
  htmlbg.style.background = "#800000";

  //Grab the BookList link
  alert(document.getElementById("viewbooklistlink").getAttribute("href"));

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
