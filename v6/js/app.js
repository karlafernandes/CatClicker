var initialCats = [
        {
			name: "poplinre",
            clickCount : 0,
			nicknames: ['Pop', 'Klein'],
        },
        {
			name: "fluffy",
            clickCount : 0,
			nicknames: ['Brown', 'KaffeMilch', 'Blau'],
        },
        {
			name: "chewie",
            clickCount : 0,
			nicknames: ['Grey', 'Hide'],
        },
        {
			name: "muffin",
            clickCount : 0,
			nicknames: ['Poa', 'Ribot'],
        },
        {
			name: "missy",
            clickCount : 0,
			nicknames: ['BlueGreen', 'Weiss'],
        },
        {
			name: "jetske",
            clickCount : 0,
			nicknames: ['Couple', 'GelbBrown'],
        }
];

var Cat = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable("images/" + data.name + ".jpg");
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
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function( catItem ){
		self.catList.push( new Cat( catItem ) );
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	
	this.incrementCounter = function() {
		//this.clickCount(this.clickCount() + 1);
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.changeCat = function(catNow) {
		var catButton = document.getElementById(catNow.name());
		var oldButton = document.getElementsByName('active')[0];
		
		//console.log(catButton);
		//console.log(oldButton);
		
		self.removeClasse(oldButton);
		self.addClass(catButton);
		self.currentCat(catNow);
	};	
	
	this.addClass = function(catButton) {		
		catButton.setAttribute('name', 'active');
		catButton.classList.add('active');
	};

	this.removeClasse = function(catButton) {
		catButton.setAttribute('name', 'inactive');
		catButton.classList.remove('active');
	};
	
}

ko.applyBindings(new ViewModel());

