import UserDAO from "./interface/UserDAO";
import {Collection} from "typeorm";
import User from "../entity/User";

export default class UserDAOImpl implements UserDAO {

    delete(id: number): void {
    }

    findAll(): Collection<User> {
        return undefined;
    }

    findById(id: number): User {
        return undefined;
    }

    saveOrUpdate(user: User): void {
    }
}