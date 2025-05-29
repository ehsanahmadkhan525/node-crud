import { model , Schema } from "mongoose";
import { IproductDocument } from "../types/product.type";


const productSchema = new Schema<IproductDocument>({
    name: { 
        type: String,
        required: [true, "Name is required"] 
    },
    price: { 
        type: Number,
        required: [true, "Price is required"] 
    },
    quantity: { 
        type: Number,
        required: [true, "Quantity is required"],
        default: 0
    },
    image: { 
        type: String,
        required: false
    },
},
{
    timestamps: true,
}
)

export const product = model<IproductDocument>("product", productSchema);
