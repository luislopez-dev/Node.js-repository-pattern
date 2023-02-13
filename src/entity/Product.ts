import {Column, Entity} from "typeorm";

@Entity()
export default class Product {
    @Column()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private price: number;

    @Column()
    private imgLink: string;

    @Column()
    private stock: number;

    constructor(id: number, name: string, price: number, imgLink: string, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgLink = imgLink;
        this.stock = stock;
    }
}