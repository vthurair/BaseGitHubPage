//
//  markdown-loader.h
//  Base GitHub.io Page
//
//  This file loads whatever's in page.md (outside this folder), and spits it into the DOM using markdown-js.
//
//  Created by Adam Bell on 2015-03-06.
//  Copyright (c) 2015 Adam Bell. All rights reserved.
//

window.addEventListener('load', function() {

var http_client = new XMLHttpRequest();
http_client.open('GET', 'page.md');
http_client.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("markdown").innerHTML = markdown.toHTML(this.response);
	}
}
http_client.send();

}, false);
