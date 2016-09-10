/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var Main = (function () {
        function Main() {
        }
        Main.run = function () {
            var myApp = angular.module("myApp", []);
        };
        return Main;
    }());
    App.Main = Main;
    Main.run();
})(App || (App = {}));
//# sourceMappingURL=app.js.map