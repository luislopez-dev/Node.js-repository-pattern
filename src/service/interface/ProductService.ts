import Product from "../../entity/Product";
import {Collection} from "typeorm";

export default interface ProductService {
    saveOrUpdate(product: Product): void;
    delete(id: number): void;
    findById(id: number): Product;
    findAll(): Collection<Product>;
}