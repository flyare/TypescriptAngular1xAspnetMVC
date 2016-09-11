/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var App;
(function (App) {
    var Service;
    (function (Service) {
        var HomeService = (function () {
            function HomeService($http) {
                var _this = this;
                this.$http = $http;
                this.getStudents = function () {
                    var result = _this.$http.get("/Home/GetStudents").then(function (data) {
                        return data.data;
                    });
                    return result;
                };
            }
            HomeService.$inject = ["$http"];
            return HomeService;
        }());
        Service.HomeService = HomeService;
        angular.module("myApp").service("App.Service.HomeService", HomeService);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=homeService.js.map