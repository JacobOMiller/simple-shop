// grab the angular module
var app = angular.module('MyApp');

// create the angular app module service

app.service('Cart.CartService',[
    //dependncy list
    '$http',
    //funtion to run once all the dependencies are created
    function($http){
        var items = [];

        //create the cart object
        var cart = {};

        //function for adding items to the cart
        cart.addProduct = function(product){
            items.push(product)
            console.log('cart is adding product', items);

        }
        //return the cart object

        return cart;


    }
]);
