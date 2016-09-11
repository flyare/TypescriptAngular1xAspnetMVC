module App.Model {
    export class Product {
        id: number;
        productName: string;
        categoryId: number;
        productCategory: ProductCategory;
    }
}