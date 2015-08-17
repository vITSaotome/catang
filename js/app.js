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
            when('/products/:categoryName', {
                templateUrl: '/views/products.html',
                controller: 'productsCtrl'
            }).
            when('/products/:categoryName/:productName', {
                templateUrl: '/views/product-details.html',
                controller: 'productDetailsCtrl'
            }).
            when('/addProduct', {
                templateUrl: '/views/addProduct.html',
                controller: 'addProductCtrl'
            }).
            otherwise({
                redirectTo: '/products'
            });
    }]);