var app = angular.module('stungun', ['firebase']);


app.filter('backwards', function() {
  return function(items) {
    return items.slice().reverse();
  };
});



app.factory('Stun', ["$firebase", function($firebase) {


var ref2 = new Firebase("https://stungun.firebaseio.com/artists");

  var sync2 = $firebase(ref2);

var stunArray = sync2.$asArray();
  //var ref = new Firebase("https://stungun.firebaseio.com/artists");
  //var sync = $firebase(ref);


		  stunnerz = stunArray;


		/*
	 stunnerp =[

						{"artist" : "New Holland",
						"profpic" : "imgs/alexnelmo.png",
						"bndcmp" : "https://newholland.bandcamp.com/music",
						"fbook" : "https://www.facebook.com/newhollandmusic",
						"sndcld" : "#",
						"tapes" : [{ "name" : "New Holland",
									"imgurl" : "imgs/newhollandtapeart.jpg" ,
									"storeurl" : "#" ,
									"digitalurl" : "https://newholland.bandcamp.com/album/new-holland" 
											}]

							},


						{"artist" : "Grotto Girl",
						"profpic" : "imgs/grottopic.jpg",
						"bndcmp" : "#",
						"fbook" : "#",
						"sndcld" : "#",
						"tapes" : []
							},



						{"artist" : "Sprawling",
						"profpic" : "imgs/sprawlband.jpg",
						"bndcmp" : "#",
						"fbook" : "#",
						"sndcld" : "#",
						"tapes" : []
							}

							]; 
							*/

	
return stunnerz;


}]);




	app.controller('StunController', ['$scope', 'Stun', function($scope, Stun) {


					

			this.stunner = Stun;


			
var tapeArray = [];

for (i = 0; i < Stun.length; i++){
			var tapers = Stun[i].tapes;

			if (tapers.length > 0){

			for (i = 0; i < tapers.length; i++){
				console.log(tapers[i]);
				tapeArray.push(tapers[i]);

			}
			}
		}

		console.log(tapeArray);


		/*	var tapeArray = []

		for (var i = 0; i < Stun.length; i++) {
					if (Stun[i].tapes) {
			
			var tapez = Stun[i].tapes; 
					

				tapeArray.push(tapez);
				
			}
						
			    	
			}


var totalTapes = [];

for (var i = 0; i < tapeArray.length; i++) {
		
		var tpAr = tapeArray[i];
		$.merge (totalTapes , tpAr)
		//totalTapes.concat(tpAr); 

	} */

//console.log(totalTapes);

//	this.tapes = totalTapes;





	}]);

	app.controller('PanelController', ['$scope', function($scope) {	
	

		$scope.tab = 0;

		this.selectTab = function(setTab) {

		$scope.tab = setTab;

		};

		this.isSelected = function(checkTab){
		return $scope.tab === checkTab;

		};


	}]);



/// make a factory for firebase ref


	app.controller('BlogController', ['$scope',  '$firebase', /* '$firebaseauth', */ function($scope, $firebase /*, $firebaseauth */) {	





var ref = new Firebase("https://stungun.firebaseio.com/blog");

  var sync = $firebase(ref);

	
	//console.log(auth);
					
var blogArray = sync.$asArray();

this.blogger = blogArray; 




	}]);



app.controller('AtpostController', ['$scope', 'Stun', function($scope, Stun) {	


			this.ape = {};
			//this.ape.tapes = Object.create(Array.prototype);
			this.stunner = Stun;

			this.addArtist = function() {
				


				Stun.$add(this.ape);


				this.ape = {};
				//this.ape.tapes = Object.create(Array.prototype);


			}

	

		

			this.clkArt = function(artist) {

		
			
				this.art = artist;

				//console.log(this.art);

			};



			this.addTape = function() {

				var pip = this.art;


				var pipp = pip.$id;


for (i = 0; i < Stun.length; i++){


				if (Stun[i].$id === pipp) {
				
					if (!Stun[i].tapes) {
				
				Stun[i].tapes = [this.tape];


							} else {
					var sapes = Stun[i].tapes;
					sapes.push(this.tape);



					} // if
				
					Stun.$save(i);

				}// if 
		
				

			} // for 


	this.tape = {};


				
} 


			



		// useful 
		/*

var tapeArray = [];

for (i = 0; i < Stun.length; i++){
			var tapers = Stun[i].tapes;

			if (tapers.length > 0){

			for (i = 0; i < tapers.length; i++){
				console.log(tapers[i]);
				tapeArray.push(tapers[i]);

			}
			}
		}

		console.log(tapeArray);
		
	*/

	}]);

app.controller('BpostController', ['$scope', '$firebase', function($scope, $firebase) {	



var ref = new Firebase("https://stungun.firebaseio.com/blog");
  var sync = $firebase(ref);

	
					
var messagesArray = sync.$asArray();


	this.blug = {};
	



	this.addPost = function(post) {

		var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var dOutput = 
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' +
    d.getFullYear() // + '/' + 
   /* d.getHours() + ':' +
    d.getMinutes() */



	this.blug.date = dOutput;




	messagesArray.$add(this.blug);

	//console.log(messagesArray);
this.blug.img1 = "";
this.blug.img2 = "";
	this.blug = {};
	}




	}]);



	app.directive('theStuff', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-stuff.html',
			controller: 'StunController',
			controllerAs: 'stun'

		};
	});

		app.directive('theBlog', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-blog.html',
			controller: 'BlogController',
			controllerAs: 'blogCtrl' 

		};
	});

		app.directive('blogPoster', function() {
		return {

			restrict: 'E',
			templateUrl: 'blog-poster.html',
			controller: 'BpostController',
			controllerAs: 'blugCtrl' 

		};
	});

		app.directive('artistTapes', function() {
		return {

			restrict: 'E',
			templateUrl: 'artist-tapes.html',
			controller: 'AtpostController',
			controllerAs: 'atpostCtrl' 

		};
	});





