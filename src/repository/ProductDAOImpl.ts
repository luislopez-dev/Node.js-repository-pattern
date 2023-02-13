import ProductDAO from "./interface/ProductDAO";
import {Collection} from "typeorm";
import Product from "../entity/Product";

export default class ProductDAOImpl implements ProductDAO {
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