cats = ["poplinre", "fluffy", "chewie"];

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {
    // This variable keeps changing every time we iterate!
    var cat = cats[i];
	var columns = 12/cats.length;
	//	alert(cat);
	
    // We're creating a DOM element for the number
    var elem = document.createElement('div');
	$(elem).html("<div class='col-md-"+columns +"' id='"+ cat +"'><h2 class='text-center' id='name'>"+ cat +"</h2><img id='cat' src='images/cat"+ i +".jpg' alt='Click ME!' title='Click ME!' class='img-responsive img-circle center-block' /><h3 id='number' class='text-center'>0 times! YEY!</h3></div>");
	$("#cat"+i+" h2#name").text(cat);	
	
    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
		//alert(numCopy);
		var nowCopy = 1;
        return function() {
			//alert(numCopy);
			var idCat = "#"+numCopy;
			$(idCat +" #number").text(nowCopy++ +" times! YEY!");
        };
    })(cat));

$( "p" ).click();

	// finally, let's add this element to the document
    document.body.appendChild(elem);
};