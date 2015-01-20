

var app = angular.module('stungun', ['firebase']);


 app.filter('backwards', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
 




app.factory('Stun', ['$http', function($http) {



   return $http.get('/artists');




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





app.controller('StunController', ['$scope', 'Stun', function($scope, Stun) {



		$scope.tab = 0;

		this.selectTab = function(setTab) {

		$scope.tab = setTab;

		};

		this.isSelected = function(checkTab){
		return $scope.tab === checkTab;

		};


var here = this;


Stun.then( function(response) {

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




app.controller('BlogController', ['$scope', '$http', function($scope, $http) {	


var here = this;

$http.get('/blog')
.then( function(response) {

//console.log(response.data);
here.blogger = response.data;

	});





	}]);



app.controller('AtpostController', ['$scope', '$http', function($scope, $http) {	


var here = this;
$http.get('/artists')
.then( function(response) {

here.stunner = response.data;

	});

this.ape = {};

this.addArtist = function() {
console.log(this.ape)

	 $http.post('/artists', this.ape);
		

	this.ape = {};

			}



	this.clkArt = function(artist) {

	
				this.art = artist;
				console.log(artist);

				artist.id

			};


		}]); 


/*


this.addTape = function() {

				var pip = this.art;


				var pipp = pip.$id;

var stun = this.stunner

for (i = 0; i < stun.length; i++){


				if (stun[i].$id === pipp) {
				
					if (!stun[i].tapes) {
				
				stun[i].tapes = [this.tape];


							} else {
					var sapes = stun[i].tapes;
					sapes.push(this.tape);

					 $http.put('/students/' + this.art.id + '/tapes/', this.tape);


					} // if
				
				

				}// if 
		
				

			} // for 


	this.tape = {};


				
} 

*/






app.controller('BpostController', ['$scope', '$http', function($scope, $http) {	


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





	 $http.post('/blog', this.blug);



this.blug.img1 = "";
this.blug.img2 = "";
	this.blug = {};
	}



}]);










