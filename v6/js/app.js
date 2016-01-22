var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = "Fluffy";
	this.imgSrc = "images/fluffy.jpg";
	this.imgAttribution = "Karlinha";
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		
		
	};
	
	this.level = ko.computed(function() {
        if (this.clickCount() < 20) {
            return "Infant";
        } else if (this.clickCount() < 50) {
            return "Teen";
        } else {
            return "Adult";
        }
    }, this);	

 
    this.nickname = ko.observableArray(['Brown', 'KaffeMilch', 'Blau']);

}

ko.applyBindings(new ViewModel());

