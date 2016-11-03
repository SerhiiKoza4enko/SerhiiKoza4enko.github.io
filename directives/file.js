'use strict';

angular.module('SiteModule').directive('file', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: "="
		},
		bindToController: {
			viewFunc: "="
		},
		controller: function () {
      	},
      	controllerAs: 'DirCtrl',
		templateUrl: "partials/file.html",
		link: function($scope, $element, $attrs, $ctrl) {
			$scope.viewDoc = function() {
				$scope.file.views++;
				$ctrl.viewFunc($scope.file);
			}
		}
	}
});