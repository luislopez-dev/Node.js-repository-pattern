import ProductService from "./interface/ProductService";
import {Collection} from "typeorm";
import Product from "../entity/Product";

export default class ProductServiceImpl implements ProductService {
    delete(id: number): void {
    }

    findAll(): Collection<Product> {
        return undefined;
    }

    findById(id: number): Product {
        return undefined;
    }

    saveOrUpdate(product: Product): void {
    }
}