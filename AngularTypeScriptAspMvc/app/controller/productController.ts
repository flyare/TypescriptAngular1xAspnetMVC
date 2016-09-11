module App.Controller {
    import Product = App.Model.Product;
    import ProductCategory = App.Model.ProductCategory;

    export class ProductController {
        static $inject = ['App.Service.ProductService'];
        products: Array<Product>;
        categories: Array<ProductCategory>;
        categoryId: number;

        constructor(private productService: Service.ProductService) {
            this.getProducts();
            this.getProductCategories();
        }

        getProducts = () => {
            this.productService.getProducts().then((data) => {
                this.products = data;
            });
        }

        getProductCategories = () => {
            this.productService.getProductCategories().then((data) => {
                this.categories = data;
            });
        }

        changeCategory = () => {
            console.log(this.categoryId);

            if (this.categoryId) {
                this.productService.getProductByCategoryId(this.categoryId).then((data) => {
                    this.products = data;
                });    
            } else {
                this.getProducts();
            }

        }
    }

    angular.module("myApp").controller("App.Controller.ProductController", ProductController);
}