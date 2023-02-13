import {Column, Entity} from "typeorm";

@Entity()
export default class Client {
    @Column()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private tel: string;

    @Column()
    private email: string;

    constructor(id: number, name: string, tel: string, email: string) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.email = email;
    }
}