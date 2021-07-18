
function loadFont(fontUrl, elementID){

	// let fontName = fontUrl.split("/")[2].split(".")[0];
	let fontName = "GoraiMJ";
	let newStyle = document.createElement('style');

	console.log(fontName);

	newStyle.appendChild(document.createTextNode("\
	@font-face {\
	    font-family: " + fontName + ";\
	    src: url('" + fontUrl + "');\
	}\
	"));

	document.head.appendChild(newStyle);
	elementID.style.fontFamily = fontName;
}

font_path = [
	"../lib/font/CHANM___.TTF",
]

// let banglaText = document.getElementById("banglaText");
// banglaText.style.fontFamily = "chandrabatiOMJ";
// loadFont(font_path[2],banglaText);