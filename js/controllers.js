var appControllers = angular.module('appControllers', []);

appControllers.controller('productsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/categories.json').success(function(data) {
            $scope.categories = data;

            //alert($scope.categories);
        });
    }
]);

appControllers.controller('productDetailsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;

        });
    }
]);