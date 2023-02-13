import UserService from "./interface/UserService";
import {Collection} from "typeorm";
import User from "../entity/User";

export default class UserServiceImpl implements UserService {
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