'use strict';

var module = angular.module('SiteModule', []);

module.controller('MainController', function($scope, $timeout) {
    $scope.works = [
        {
            id: 1,
            title: 'Контрольная работа по теме "Высшая нервная деятельность"',
            name: 'docuemnt1.docx'
        }
    ]

    $scope.url = "";

    $scope.showDoc = function(work) {
        $scope.url = work.url;
    }
});