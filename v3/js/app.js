cats = ["poplinre", "fluffy", "chewie", "muffin", "missy","jetske"];

// Let's create the list of cats buttons
for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
	$("#buttons").append("<button type='button' class='btn btn-default btn-lg' onClick='showCat("+i+");' id='"+cat+"'>"+cat+"</button>   ");	
};

// showing the cat selected
function showCat(catIndex) {
    var cat = cats[catIndex];

	for (var i = 0; i < cats.length; i++) {
	    $("#"+cats[i]).removeClass("active");
	};
	$("#"+cat).addClass("active");
	
	// clear the screen
	$("#catNow").empty();

	// add the cat selected on the screen	
	$("#catNow").append("<div class='col-md-12' id='"+ cat +"'><h2 class='text-center' id='name'>"+ cat +"</h2><img id='cat' src='images/cat"+ catIndex +".jpg' alt='Click ME!' title='Click ME!' class='img-responsive img-circle center-block' /><h3 id='number' class='text-center'>0 times! YEY!</h3></div>");
	
    // add function to interate with its clicks
	var number = 0;
		
	$("#catNow #cat").click(function() {
		number++;
		$("#number").text(number +" times! YEY!");
	});
};