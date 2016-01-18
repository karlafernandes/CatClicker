var number = 1;

$( "#cat" ).click(function() {
	var now = number++;
	$("#number").text(now +" times! YEY!");
});