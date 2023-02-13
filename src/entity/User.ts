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


    constructor(id: number, name: string, surname: string, email: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}