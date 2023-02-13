import ClientDAO from "./interface/ClientDAO";
import {Collection} from "typeorm";
import Client from "../entity/Client";

export default class ClientDAOImpl implements ClientDAO {

    delete(id: number): void {
    }

    findAll(): Collection<Client> {
        return undefined;
    }

    findById(id: number): Client {
        return undefined;
    }

    saveOrUpdate(client: Client): void {
    }
}