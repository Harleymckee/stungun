var app = angular.module('stungun', ['ngAnimate']);


	app.controller('StunController', ['$scope', function($scope) {	



		var stunnerz = [

						{"artist" : "New Holland",
						"profpic" : "imgs/alexnelmo.png",
						"bndcmp" : "#",
						"fbook" : "#",
						"sndcld" : "#",
						"tapes" : [{ "name" : "New Holland",
									"imgurl" : "imgs/newhollandtapeart.jpg" ,
									"storeurl" : "#" ,
									"digitalurl" : "#" ,
									"storeurl" : "#" 
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




	}]);

