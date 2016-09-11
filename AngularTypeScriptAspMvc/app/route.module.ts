/// <reference path="../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
module App {
    export class Routers {
        static $inject = ["$stateProvider", "$urlRouterProvider"];
        static configRoute = ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void => {
            $stateProvider.state({
                name: 'home',
                url: '/home',
                templateUrl: '/app/view/home/index.html',
                controller: "App.Controller.HomeController",
                controllerAs: 'vm'
            }).state({
                name: 'about',
                url: '/about',
                templateUrl: '/app/view/about/about.html'
            }).state({
                name: 'product',
                url: '/product',
                templateUrl: '/app/view/product/index.html',
                controller: "App.Controller.ProductController",
                controllerAs: 'vm'
            });

            $urlRouterProvider.otherwise("/home");
        }
    }
}