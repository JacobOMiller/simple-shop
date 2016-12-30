'use strict';

var app = angular.module('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
        .state('home',{
            url:'/home',
            template:'<h2>home</h2>'
        })
        .state('about',{
            url:'/about',
            template:'<h2>about</h2>'
        })
        .state('contact',{
            url:'/contact',
            template:'<h2>contact</h2>'
        });

        //--------------------------------------------
        //products routing
        $stateProvider
        .state('product',{
            url: '/product',
            templateUrl:'/templates/product/list.html',
            controller: 'Product.productController'
        })
        .state('product-create',{
            url: '/product/create',
            templateUrl:'/templates/product/edit.html',
            controller: 'Product.productController'
        });

        //--------------------------------------------
        //cart routing


        //--------------------------------------------
        //blog routing
    }
])
