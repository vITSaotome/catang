var appControllers = angular.module('appControllers', []);

appControllers.controller('products', ['$scope', '$http',
    function($scope, $http) {
        //$http.get('data/categories.json').success(function(data) {
        //    $scope.categories = data;
        //});
        alert("test");
    }]);