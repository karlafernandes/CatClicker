var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);
	
	this.level = ko.computed(function() {
        if (this.clickCount() < 20) {
            return "Infant";
        } else if (this.clickCount() < 50) {
            return "Teen";
        } else {
            return "Adult";
        }
    }, this);	
}

var ViewModel = function(){	
	var self = this;
	
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: "Fluffy",
		imgSrc: "images/fluffy.jpg",
		imgAttribution: "Karlinha",
		nicknames: ['Brown', 'KaffeMilch', 'Blau']
	}) );
	
	this.incrementCounter = function() {
		//this.clickCount(this.clickCount() + 1);
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());

