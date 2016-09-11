var App;
(function (App) {
    var Service;
    (function (Service) {
        var ProductService = (function () {
            function ProductService($http) {
                var _this = this;
                this.$http = $http;
                this.getProducts = function () {
                    var result = _this.$http.get("/Home/GetProduct").then(function (data) {
                        return data.data;
                    });
                    return result;
                };
                this.getProductCategories = function () {
                    var result = _this.$http.get("/Home/GetProductCategory").then(function (data) {
                        return data.data;
                    });
                    return result;
                };
                this.getProductByCategoryId = function (id) {
                    var config = {
                        params: {
                            id: id
                        }
                    };
                    var result = _this.$http.get("/Home/GetProductByCategoryId", config).then(function (data) {
                        return data.data;
                    });
                    return result;
                };
            }
            ProductService.$inject = ["$http"];
            return ProductService;
        }());
        Service.ProductService = ProductService;
        angular.module("myApp").service("App.Service.ProductService", ProductService);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=productService.js.map