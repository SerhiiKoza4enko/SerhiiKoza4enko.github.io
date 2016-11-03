'use strict';

angular.module('SiteModule', ["firebase"]).controller('MainController', function($scope, $http, $timeout, $firebase) {
    $scope.works = [];
    var ref = new Firebase("https://prikol-be70b.firebaseio.com");
    var obj = $firebase(ref).$asObject();
    $scope.works = obj;

    obj.$bindTo($scope, "works");

    $scope.url = "";

    $scope.showDoc = function(file) {
        console.log(file);
    }
});