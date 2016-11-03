'use strict';

angular.module('SiteModule', ["firebase", "ui.bootstrap", "ngAside"]).controller('MainController', function($scope, $http, $timeout, $firebase, $uibModal, $sce) {
    $scope.works = [];
    var ref = new Firebase("https://prikol-be70b.firebaseio.com");
    var obj = $firebase(ref).$asObject();
    $scope.works = obj;

    obj.$bindTo($scope, "works");

    $scope.url = "";

    $scope.showDoc = function(file) {
        $scope.url = $sce.trustAsResourceUrl("https://docs.google.com/gview?url=https://serhiikoza4enko.github.io/resources/documents/" + file.name + "&embedded=true");
        $scope.title = file.title;
        $scope.modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './partials/doc-view.html',
            windowClass: 'docviewer',
            scope:$scope
        });
    }

    $scope.close = function() {
        $scope.modalInstance.dismiss();
    }
});