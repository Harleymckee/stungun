

var app = angular.module('stungun', ['firebase']);


app.filter('backwards', function() {
  return function(items) {
    return items.slice().reverse();
  };
});





/*app.factory('Stun', ['$http', function($http) {
   return $http.get('/artists');
  }]);*/


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





app.controller('StunController', ['$scope', '$http', function($scope, $http) {



		$scope.tab = 0;

		this.selectTab = function(setTab) {

		$scope.tab = setTab;

		};

		this.isSelected = function(checkTab){
		return $scope.tab === checkTab;

		};


var here = this;


$http.get('/artists')
.then( function(response) {

	var arr = response.data;

	var tapeArray = [];
	for (i = 0; i < arr.length; i++) {
		var tapes = arr[i].tapes;
		if (tapes.length > 0) {
			
			for (t = 0; t < tapes.length; t++)
				var tape = tapes[t];
			tapeArray.push(tape);
		}

	}


	here.stunner = response.data;
	here.tapes = tapeArray;
	
});



	}]);




app.controller('BlogController', ['$scope',  '$firebase', /* '$firebaseauth', */ function($scope, $firebase /*, $firebaseauth */) {	





var ref = new Firebase("https://stungun.firebaseio.com/blog");

  var sync = $firebase(ref);

	
	//console.log(auth);
					
var blogArray = sync.$asArray();

this.blogger = blogArray; 




	}]);

/*

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



	}]); */

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










