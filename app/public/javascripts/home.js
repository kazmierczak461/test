var app = angular.module("TodoApp", []);

app.controller("MyFirstCtrl", ['$scope', '$http', function ($scope, $http) {



    $scope.greeting = 'Hi';
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/userlist')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.deleteTodo = function(id) {
        $http.delete('/userlist/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };



}]);
