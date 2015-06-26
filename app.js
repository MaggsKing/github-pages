var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', function ($scope) {
	$scope.greeting = "howdy";
}])