import {Billing} from "../../entity/Billing";
import {Collection} from "typeorm";

export default interface BillingDAO {
    saveOrUpdate(billing: Billing): void;
    delete(id: bigint): void;
    findById(id: bigint): Billing;
    findAll(): Collection<Billing>
}