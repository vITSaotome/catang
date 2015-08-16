var app = angular.module('app', [
    'ngRoute',
    'appControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/products', {
                templateUrl: '/views/products.html',
                controller: 'productsCtrl'
            }).
            when('/products/:id', {
                templateUrl: '/views/product-details.html',
                controller: 'productDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/products'
            });
    }]);