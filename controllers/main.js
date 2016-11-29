'use strict';

angular.module('SiteModule', ["firebase", "ui.bootstrap", "ngAside"]).controller('MainController', function($scope, $http, $timeout, $firebase, $uibModal, $sce) {
    $scope.active = 0;

    $http.get("https://api.mlab.com/api/1/databases/larisa/collections/photos?apiKey=jL3Dzaj13sD0yfcWH3CQz322xUnQRRbs").then(function(response) {
        $scope.photos = response.data;
    });

    $scope.url = "";

    $scope.showDoc = function(file) {
        $scope.url = $sce.trustAsResourceUrl("https://docs.google.com/gview?url=kozachenko-larisa.ru/resources/documents/" + file.link + "&embedded=true");
        $scope.title = file.title;
        $scope.modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './partials/doc-view.html',
            windowClass: 'docviewer',
            scope: $scope
        });
    }

    $scope.close = function() {
        $scope.modalInstance.dismiss();
    }

    $scope.open = function(indx) {
        $scope.active = indx;
        $scope.photos[indx].active = true;

        $scope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'template/pic-modal.html',
            windowClass: 'photoviewer',
            scope: $scope
        });
    };

    $scope.ok = function() {
        $scope.modalInstance.close();
    };
});