import {Column, Entity} from "typeorm";

@Entity()
export default class User {
    @Column()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private surname: string;

    @Column()
    private email: string;
}