console.log('inside here');
var daId = 'hightlight_degree_audit_cssId';

var head = document.getElementsByTagName('head')[0];
var link = document.createElement('link');

link.id = daId;
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://calhacks3twitter.herokuapp.com/pretty/test.css';
head.appendChild(link);

