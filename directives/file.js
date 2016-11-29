'use strict';

angular.module('SiteModule').directive('file', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: "="
		},
		bindToController: {
			viewFunc: "=",
			updateFunc: "="
		},
		controller: function () {
      	},
      	controllerAs: 'DirCtrl',
		templateUrl: "partials/file.html",
		link: function($scope, $element, $attrs, $ctrl) {
			$scope.viewDoc = function() {
				$scope.file.views++;
				$ctrl.viewFunc($scope.file);
				$ctrl.updateFunc($scope.file);
			}

			$scope.downloadDoc = function() {
				$scope.file.downoads++;
				window.open("/resources/documents/" + $scope.file.link, '_blank');
				$ctrl.updateFunc($scope.file);
			}
		}
	}
});