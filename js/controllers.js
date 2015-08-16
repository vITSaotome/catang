var appControllers = angular.module('appControllers', []);

appControllers.controller('data', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/categories.json').success(function(data) {
            $scope.categories = data;
            //console.log($scope.categories[0]);
        });
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
            //console.log($scope.products[0]);
        });
    }
]);

appControllers.controller('productsCtrl', ['$scope', '$http',
    function($scope, $http) {

    }
]);

appControllers.controller('productDetailsCtrl', ['$scope', '$http',
    function($scope, $http) {

    }
]);