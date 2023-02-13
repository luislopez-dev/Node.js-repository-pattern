import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export default class Billing {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private nit: string;

    @Column()
    private taxes: number;

    @Column()
    private discounts: number;

    @Column()
    private total: number;

    constructor(id: number, nit: string, taxes: number, discounts: number, total: number) {
        this.id = id;
        this.nit = nit;
        this.taxes = taxes;
        this.discounts = discounts;
        this.total = total;
    }
}