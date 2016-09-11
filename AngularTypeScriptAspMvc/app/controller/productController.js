var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var ProductController = (function () {
            function ProductController(productService) {
                var _this = this;
                this.productService = productService;
                this.getProducts = function () {
                    _this.productService.getProducts().then(function (data) {
                        _this.products = data;
                    });
                };
                this.getProductCategories = function () {
                    _this.productService.getProductCategories().then(function (data) {
                        _this.categories = data;
                    });
                };
                this.changeCategory = function () {
                    console.log(_this.categoryId);
                    if (_this.categoryId) {
                        _this.productService.getProductByCategoryId(_this.categoryId).then(function (data) {
                            _this.products = data;
                        });
                    }
                    else {
                        _this.getProducts();
                    }
                };
                this.getProducts();
                this.getProductCategories();
            }
            ProductController.$inject = ['App.Service.ProductService'];
            return ProductController;
        }());
        Controller.ProductController = ProductController;
        angular.module("myApp").controller("App.Controller.ProductController", ProductController);
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=productController.js.map