// grab the angular module.
var app = angular.module('MyApp');

//define the module controller

app.controller('Product.productController',[
    //dependency list,
    '$scope', '$http', '$state','Cart.CartService',
    //call back function to creat controller
    function($scope, $http, $state, CartService){
        $scope.product = {};

        $scope.create= function(){
            //make a call to the json server to save the product
            $http({
                method:'POST',
                url:'/products',

                data:$scope.product

            })
            .success(function (response){
                console.log('product saved' ,product);

            })


        }
        $scope.readAll= function(){
            //make a call to the json server to read all the products
            $http({
                method:'Get',
                url:'/products'

            })
            .success(function(response){
                console.log('products read in');
                $scope.productList = response;
            })
        }
        $scope.addToCart = function (product) {
            //add the product to the cart service
            CartService.addProduct (product);
        }

        //create setup function to run when controller is created

        function setup(){
            //check the state we are currently on
            if ($state.current.name == 'product'){
                // read in the list of products in the database.


                $scope.readAll();
            }
        }

        //run the setup
        setup();
    }
])
