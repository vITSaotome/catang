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
            when('/category/:name', {
                templateUrl: '/views/products.html',
                controller: 'productCtrl'
            }).
            when('/product/:name', {
                templateUrl: '/views/product-details.html',
                controller: 'productsDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/products'
            });
    }]);