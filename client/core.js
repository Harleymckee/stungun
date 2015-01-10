var app = angular.module('stungun', []);


	app.controller('StunController', ['$scope', function($scope) {	



		var stunnerz = [

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


		this.stunner = stunnerz;


			var tapeArray = []

			for (var i = 0; i < stunnerz.length; i++) {

						var tapes = stunnerz[i].tapes; 

				tapeArray.push(tapes);
						
			    	
			}


var totalTapes = [];

for (var i = 0; i < tapeArray.length; i++) {
		
		var tpAr = tapeArray[i];
		$.merge (totalTapes , tpAr)
		//totalTapes.concat(tpAr); 

	}

	this.tapes = totalTapes;





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


	app.controller('BlogController', ['$scope', function($scope) {	


//var ts = Math.round((new Date()).getTime());

//console.log(ts);



	}]);


app.controller('BpostController', ['$scope', function($scope) {	

	/*var bluggers = {"head" : "sdf",
				"date" : "sdf",
				"body1" : "sdf",
				"img1" : "dfs",
				"body2" : "fsd",
				"img2" : "fsd"
						}; */

	this.blug = {};
	var posts =[];



	





	this.addPost = function(post) {

		var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var dOutput = 
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' +
    d.getFullYear() + '/' + 
    d.getHours() + ':' +
    d.getMinutes()



	this.blug.date = dOutput;

	posts.push(this.blug);

	console.log(posts);

	this.blug = {};
	}


//var ts = Math.round((new Date())

//console.log(ts);



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
			controllerAs: 'blug' 

		};
	});


