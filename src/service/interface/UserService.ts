import User from "../../entity/User";
import {Collection} from "typeorm";

export default interface UserService {
    saveOrUpdate(user: User): void;
    delete(id: number): void
    findById(id: number): User;
    findAll(): Collection<User>;
}