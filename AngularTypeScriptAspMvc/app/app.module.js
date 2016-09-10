/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var Main = (function () {
        function Main() {
        }
        Main.run = function () {
            var myApp = angular.module("myApp", ['ui.router']);
            myApp.config(App.Routers.configRoute);
        };
        return Main;
    }());
    App.Main = Main;
    Main.run();
})(App || (App = {}));
//# sourceMappingURL=app.module.js.map