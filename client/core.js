var app = angular.module('stungun', ['ngAnimate']);


	app.controller('StunController', ['$scope', function($scope) {	



		var stunnerz = [{"artist" : "New Holland",
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


							{"artist" : "New Holland",
						"profpic" : "imgs/alexnelmo.png",
						"bndcmp" : "#",
						"fbook" : "#",
						"sndcld" : "#",
						"tapes" : [{ "name" : "New Poop",
									"imgurl" : "imgs/newhollandtapeart.jpg" ,
									"storeurl" : "#" ,
									"digitalurl" : "#" ,
									"storeurl" : "#" 
											}, 
									{ "name" : "New shit",
									"imgurl" : "imgs/newhollandtapeart.jpg" ,
									"storeurl" : "#" ,
									"digitalurl" : "#" ,
									"storeurl" : "#" 
											} 

											]

							}];


		this.stunner = stunnerz;


var tapeArray = []

		for (var i = 0; i < stunnerz.length; i++) {

			var tapes = stunnerz[i].tapes; 

	tapeArray.push(tapes);

			/*for (var i = 0; i < tapes.length; i++) {

						tape = tapes[i];
						tapeArray.push(tape);


				}*/
			
			


	
			
    	
}


var totalTapes = [];

for (var i = 0; i < tapeArray.length; i++) {
		
		var tpAr = tapeArray[i];
		$.merge (totalTapes , tpAr)
		//totalTapes.concat(tpAr); 

	}

	console.log(totalTapes);


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

