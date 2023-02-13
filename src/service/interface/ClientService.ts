import Client from "../../entity/Client";
import {Collection} from "typeorm";

export default interface ClientService {
    saveOrUpdate(client: Client): void;
    delete(id: number): void;
    findById(id: number): Client;
    findAll(): Collection<Client>;
}