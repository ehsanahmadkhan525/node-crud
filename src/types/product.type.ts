import { Document } from "mongoose";


export interface Iproduct extends Document {
    name: string;
    price: number;
    quantity: number;
    image?: string;
}


export interface IproductDocument extends Iproduct, Document { 

    created_at: Date;
    updated_at: Date;

}