module App.Model {
    export class ProductCategory {
        Id: number;
        categoryName: string;
        products: Array<Product>;
    }
}