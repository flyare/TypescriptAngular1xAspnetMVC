var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var HomeController = (function () {
            function HomeController(homeService) {
                var _this = this;
                this.homeService = homeService;
                this.students = [
                    { firstName: "Duc", lastName: "Phan Hoang", age: 35, address: "HN", active: true }
                ];
                this.getStudents = function () {
                    _this.homeService.getStudents().then(function (data) {
                        _this.students = data;
                    });
                };
                this.getStudents();
            }
            HomeController.$inject = ['App.Service.HomeService'];
            return HomeController;
        }());
        Controller.HomeController = HomeController;
        angular.module("myApp").controller("App.Controller.HomeController", HomeController);
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=homeController.js.map