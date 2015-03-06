//
//  markdown-loader.h
//  Base GitHub.io Page
//
//  This file loads whatever's specified by the div's attribute markdown-file (outside this folder, index.html), and spits it into the DOM using markdown-js.
//
//  eg.
//
//  <div id="markdown" markdown-file="page.md"> <--- whatever file you want
//  </div>
//
//  Created by Adam Bell on 2015-03-06.
//  Copyright (c) 2015 Adam Bell. All rights reserved.
//

window.addEventListener('load', function() {

	var markdown_div = document.getElementById('markdown');
  markdown_filename = markdown_div.getAttribute('markdown-file');

	var http_client = new XMLHttpRequest();
	http_client.open('GET', '../' + markdown_filename);
	http_client.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			markdown_div.innerHTML = markdown.toHTML(this.response);
		}
	}
	http_client.send();

}, false);