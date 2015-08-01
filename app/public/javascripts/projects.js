'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'pages/projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', function($scope) {

      $scope.form = {
        data: {
          new: 'Beng!'
        },
        settings: {

        }

      }

      $scope.new = 'Finaly is everything working';

});