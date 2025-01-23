function createElement(data) {
	var pTag = document.createElement("p");
	pTag.innerHTML(data);
	document.body.appendChild(pTag);
}

function queryWikipedia(callback) {
	var myReq = new XMLHttpRequest();
	myReq.addEventListener("load", createElement);
	myReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
	myReq.send();
	callback(myReq.response);
}

queryWikipedia(createElement);
 