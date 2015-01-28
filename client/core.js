

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
			transclude: true,
			templateUrl: 'the-stuff.html',
			controller: 'StunController',
			controllerAs: 'stun'

		};
	});

	/*	app.directive('theBlog', function() {
		return {

			restrict: 'E',
			templateUrl: 'the-blog.html',
			controller: 'BlogController',
			controllerAs: 'blogCtrl' 

		};
	});
*/

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





app.controller('StunController', ['$scope', 'Stun', '$http', function($scope, Stun, $http) {



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
			


			
			for (t = 0; t < tapes.length; t++) {


				var tape = tapes[t];
		
			tapeArray.push(tape);

				} 



		}



	}


	here.stunner = response.data;
	here.tapes = tapeArray;
	
});




	this.deleteArtist = function(id) {

		if (confirm('Are ya sure?')) {

$http.delete('/artists/' + id)
            .success(function(data) {
                //here.stunner = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 



} else {
    return;
}

		
    };



	this.deleteTape = function(id) {

		if (confirm('Are ya sure?')) {

$http.delete('/tapes/' + id)
            .success(function(data) {
                //here.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 



} else {
    return;
}

		
    };



 //blog


$http.get('/blog')
.then( function(response) {

//console.log(response.data);
here.blogger = response.data;

	});






	this.deletePost = function(id) {

		if (confirm('Are ya sure?')) {

$http.delete('/blog/' + id)
            .success(function(data) {
                here.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 



} else {
    return;
}

		
    };



	}]);

/*


app.controller('BlogController', ['$scope', '$http', function($scope, $http) {	


var here = this;

$http.get('/blog')
.then( function(response) {

//console.log(response.data);
here.blogger = response.data;

	});





	}]); */


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
			


			};





	this.tape = {};


this.addTape = function() {

				

var pip = this.art;
			
var pipId = pip._id;


var stun = this.stunner
 $http.post('/tapes/' + pipId, this.tape);

	this.tape = {};

				
} 



		}]); 












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



//this.blug.img1 = "";
//this.blug.img2 = "";
	this.blug = {};
	}



}]);










