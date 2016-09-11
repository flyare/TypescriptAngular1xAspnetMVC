module App.Service {
    import Product = App.Model.Product;
    import ProductCategory = App.Model.ProductCategory;

    export class ProductService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        getProducts = (): ng.IPromise<Array<Product>> => {

            let result: ng.IPromise<Array<any>> = this.$http.get("/Home/GetProduct").then((data) => {
                return data.data;
            });

            return result;
        }

        getProductCategories = (): ng.IPromise<Array<ProductCategory>> => {

            let result: ng.IPromise<Array<any>> = this.$http.get("/Home/GetProductCategory").then((data) => {
                return data.data;
            });

            return result;
        }

        getProductByCategoryId = (id: number): ng.IPromise<Array<Product>> => {

            let config = {
                params: {
                    id: id
                }
            };

            let result: ng.IPromise<Array<any>> = this.$http.get("/Home/GetProductByCategoryId", config).then((data) => {
                return data.data;
            });

            return result;
        }
    }

    angular.module("myApp").service("App.Service.ProductService", ProductService);
}