var app = angular.module('stungun', []);


	app.controller('StunController', ['$scope', function($scope) {	




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

