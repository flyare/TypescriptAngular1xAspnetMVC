/// <reference path="../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
var App;
(function (App) {
    var Routers = (function () {
        function Routers() {
        }
        Routers.$inject = ["$stateProvider", "$urlRouterProvider"];
        Routers.configRoute = function ($stateProvider, $urlRouterProvider) {
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
            });
            $urlRouterProvider.otherwise("/home");
        };
        return Routers;
    }());
    App.Routers = Routers;
})(App || (App = {}));
//# sourceMappingURL=route.module.js.map