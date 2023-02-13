import {Collection} from "typeorm";
import Billing from "../../entity/Billing";

export  default interface BillingService {
    saveOrUpdate(billing: Billing): void;
    delete(id: bigint): void;
    findById(id: bigint): Billing;
    findAll(): Collection<Billing>
}