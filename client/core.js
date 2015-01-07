var app = angular.module('stungun', ['ngAnimate']);


	app.controller('StunController', ['$scope', function($scope) {	



		var stunnerz = {"artist" : "New Holland",
						"profpic" : "imgs/alexnelmo.png",
						"" : "",
						"tape" : { "name" : "New Holland",
									"imgurl" : "imgs/newhollandtapeart.jpg" //,
								//	"storeurl" : "",
								//	"bcurl" : "" 
											}

							}; 
		this.stunner = stunnerz;




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

