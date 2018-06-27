(function (){
	var app = angular.module("LunchCheck", []);
	app.controller("mainController", mainController);

	mainController.$inject = ['$scope'];

	function mainController ($scope) {
		$scope.lunchMenu = "";

		$scope.checkIfTooMuch = function() {
			$scope.kkk = $scope.lunchMenu.split(",");

			if ($scope.kkk[0] == "" && $scope.kkk.length <=1) {
				$scope.message = "Please enter data first";
			} else if($scope.kkk.length <= 3) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too Much!";
			}
		};
	}
})();