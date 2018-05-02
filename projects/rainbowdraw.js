var color = 0;

document.onmousemove = function(e){
	// console.log(e["keys중에 하나 입력"])

	// var x = event["x"];
	// var y = event["y"]; 는 밑에 랑 같음 (event.x/y)
	var x = event.x;
	var y = event.y;
	// console.log (x, y);
	var div = document.createElement("div");
	div.style.left = x + "px";
	div.style.top = y + "px";
	div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)"
	document.body.appendChild(div);

	color = color + 1; 
}