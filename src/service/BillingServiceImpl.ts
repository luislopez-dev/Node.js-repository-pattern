import BillingService from "./interface/BillingService";
import {Collection} from "typeorm";
import Billing from "../entity/Billing";

export default class BillingServiceImpl implements BillingService {

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