var appControllers = angular.module('appControllers', []);

appControllers.controller('data', ['$routeParams', '$scope', '$http',
    function($routeParams, $scope, $http) {
        $http.get('data/categories.json').success(function(data) {
            $scope.categories = data;
            $scope.helper.categories = data;
        });
        $http.get('data/products.json').success(function(data) {
            $scope.products = data;
            $scope.helper.products = data;
        });
        $http.get('data/comments.json').success(function(data) {
            $scope.helper.comments = data;
        });

        $scope.helper = {
            "orderProducts" : 'name',
            "routeCategoryName" : '',
            "routeProductName" : '',
            "productsBy3" : [],
            "productsSort" : [],
            "categories" : [],
            "products" : [],
            "comments" : [],
            "cart" : [],
            "cartPrice" : 0,
            "categorySelected" : function(name){
                if($scope.helper.routeCategoryName == name){return 'active';}
            },
            "addToCart" : function(name){
                angular.forEach($scope.helper.products, function(value) {
                    if(name==value.name) {
                        $scope.helper.cart.push(angular.copy(value));
                    }
                });
                $scope.helper.cartPriceFunc();
            },
            "cartPriceFunc" : function(name){
                $scope.helper.cartPrice = 0;
                angular.forEach($scope.helper.cart, function(value) {
                    $scope.helper.cartPrice += value.price;
                });
            }
        };
    }
]);

appControllers.controller('productsCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.helper.routeCategoryName = $routeParams.categoryName;
    }
]);

appControllers.controller('addProductCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.product = {
            "category" : "",
            "name" : "",
            "price" : "",
            "description" : ""
        };

        $scope.addProduct = function(){
            var imgArr = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
            var range = 10 - 1 + 1;
            var key = Math.floor(Math.random()*range) + 1;

            $scope.helper.products.push({
                "category" : $scope.product.category,
                "name" : $scope.product.name,
                "price" : $scope.product.price,
                "img" : imgArr[key] + '.jpg',
                "description" : $scope.product.description
            });
            $scope.product.category = "";
            $scope.product.name = "";
            $scope.product.price = "";
            $scope.product.description = "";
        }
    }
]);

appControllers.controller('productDetailsCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.helper.routeCategoryName = $routeParams.categoryName;
        $scope.helper.routeProductName = $routeParams.productName;

        $scope.comment = {
            "product_name" : $scope.helper.routeProductName,
            "name" : "",
            "comment" : ""
        };

        $scope.addComment = function(){
            $scope.helper.comments.push({
                "product_name" : $scope.comment.product_name,
                "name" : $scope.comment.name,
                "comment" : $scope.comment.comment
            });
            $scope.comment.name = "";
            $scope.comment.comment = "";
        }
    }
]);