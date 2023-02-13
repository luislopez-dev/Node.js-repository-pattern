import BillingDAO from "./interface/BillingDAO";
import {Collection} from "typeorm";
import {Billing} from "../entity/Billing";

export default class BillingDAOImpl implements BillingDAO {

    delete(id: bigint): void {
    }

    findAll(): Collection<Billing> {
        return undefined;
    }

    findById(id: bigint): Billing {
        return undefined;
    }

    saveOrUpdate(billing: Billing): void {
    }

}