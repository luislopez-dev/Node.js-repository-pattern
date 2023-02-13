import ClientService from "./interface/ClientService";
import {Collection} from "typeorm";
import Client from "../entity/Client";

export default class ClientServiceImpl implements ClientService {
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