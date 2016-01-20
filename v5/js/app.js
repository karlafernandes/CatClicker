// Model
var model = {
    currentCat: null,
    cats: [
        {
			name: "poplinre",
            clickCount : 0		
        },
        {
			name: "fluffy",
            clickCount : 0
        },
        {
			name: "chewie",
            clickCount : 0
        },
        {
			name: "muffin",
            clickCount : 0
        },
        {
			name: "missy",
            clickCount : 0
        },
        {
			name: "jetske",
            clickCount : 0		
        }
    ]
};


// Controller
var controller = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
		formView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    saveCat: function(catClicks) {
    //  model.currentCat.name = catName;
		model.currentCat.clickCount = catClicks;
        catView.render();
		formView.render();
		formView.hide();
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
		formView.render();	
    }
};


// View
var formView = {
	init: function() {
		this.formElem = document.getElementById('form-admin');
		this.formButton = document.getElementById('form-button');
		this.formSave = document.getElementById('form-save');
		this.formCancel = document.getElementById('form-cancel');
		this.formCatName = document.getElementById('form-cat-name');
		this.formCatClicks = document.getElementById('form-cat-clicks');		
		
        this.formCancel.addEventListener('click', function(){
            formView.hide();
        });

        this.formSave.addEventListener('click', function(){
			controller.saveCat(document.getElementById('form-cat-clicks').value);
        });
					
        this.formButton.addEventListener('click', function(){
            formView.show();
        });		
		
		formView.hide();
        this.render();	
	},

	render: function() {
        var currentCat = controller.getCurrentCat();
        this.formCatClicks.value = currentCat.clickCount;
        this.formCatName.value = currentCat.name;
	},
	
	hide: function() {
		this.formElem.classList.add('hidden');
	},
	
	show: function() {
		this.formElem.classList.remove('hidden');
	}	
};


var catView = {
    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            controller.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = 'images/'+currentCat.name+'.jpg';
    }
};

var catListView = {
    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('buttons');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the controller
        var cats = controller.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('button');
            elem.textContent = cat.name;
			elem.id = cat.name;
			elem.classList.add('btn', 'btn-default', 'btn-lg');
			

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {	
                    controller.setCurrentCat(catCopy);
                    catView.render();
					formView.render();
		
					cats = controller.getCats();
					for (i = 0; i < cats.length; i++) {
						var catElem = document.getElementById(model.cats[i].name);
						catElem.classList.remove('active');
					}
		
					var catElem = document.getElementById(catCopy.name);
					catElem.classList.add('active');
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
controller.init();

