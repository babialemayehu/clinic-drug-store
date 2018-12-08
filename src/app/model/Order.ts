import { Supplier } from "./Supplier";
import { User } from "./User";

export interface Order{
    id:number,
    order_by:number, 
    order: User, 
    supplier_id:number,
    supplier: Supplier,  
    issued_by:number,
    issrer: User, 
    created_at: string, 
    updated_at: string,
    selected: boolean
}